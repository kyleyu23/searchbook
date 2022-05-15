import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  private books: any = [];
  private bookSbj$ = new Subject();
  books$ = this.bookSbj$.asObservable();

  private wishlist: any = [];
  private wishSbj$ = new Subject();
  wishlist$ = this.wishSbj$.asObservable();

  constructor(private http: HttpClient) {}

  getBooks(keyword: string) {
    this.http
      .get([this.baseUrl, keyword].join())
      .pipe(
        map((bookobj: any) => {
          const arr = bookobj.items.map((obj: any) => {
            return {
              name: obj.volumeInfo.title,
              publisher: obj.volumeInfo.publisher,
              publishdate: obj.volumeInfo.publishdate,
              description: obj.volumeInfo.description,
              imgUrl: obj.volumeInfo.imageLinks.thumbnail,
              id: obj.id,
            };
          });
          return arr;
        }),
        tap((books) => {
          this.books = [...books];
          this.bookSbj$.next(this.books);
        })
      )
      .subscribe();
  }

  addToWishList(id: string) {
    const bookToAdd = this.books.find((book: any) => book.id === id);
    const inWishList = this.wishlist.find((book: any) => book.id === id);
    if (!bookToAdd || inWishList) return;
    this.wishlist = [...this.wishlist, bookToAdd];
    this.wishSbj$.next(this.wishlist);
  }
  deleteFromWishList(id: string) {
    const bookToDelte = this.books.find((book: any) => book.id === id);
    if (!bookToDelte) return;
    this.wishlist = this.wishlist.filter((book: any) => book.id !== id);
    this.wishSbj$.next(this.wishlist);
  }
}

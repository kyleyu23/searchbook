import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) {}

  getBooks(book: string): Observable<Book[]> {
    const trimmedBookname = book.trim();
    if (!trimmedBookname) {
      return of([]);
    }
    return this.http.get([this.baseUrl, book].join()).pipe(
      map((response: any) => {
        const items = response.items.map((bookinfo: any) => {
          return {
            name: bookinfo.volumeInfo.title,
            publisher: bookinfo.volumeInfo.publisher,
            publishdate: bookinfo.volumeInfo.publishdate,
            description: bookinfo.volumeInfo.description,
            imgUrl: bookinfo.volumeInfo.imageLinks.thumbnail,
            id: bookinfo.id,
          };
        });
        return items;
      })
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { switchMap, Subject } from 'rxjs';
import { Book } from './book.interface';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // scalar
  readonly title = 'searchbook';
  wishList: Book[] = [];

  // stream
  readonly bookname$ = new Subject<string>();

  readonly books$ = this.bookname$.pipe(
    switchMap((bookname) => {
      return this.bookService.getBooks(bookname);
    })
  );

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  addToWishList(book: Book): void {
    // const isInWishList2: boolean = this.wishList.includes(book);
    const isInWishList: boolean = this.wishList.some(
      (bookToAdd) => bookToAdd.id === book.id
    );

    if (!isInWishList) {
      this.wishList = [...this.wishList, book];
    }
  }

  deleteFromWishList(book: Book): void {
    this.wishList = this.wishList.filter(
      (bookToDelete) => bookToDelete.id !== book.id
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { books } from '../books';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent implements OnInit {
  // books: any = [];
  readonly books$: any = this.bookService.books$;
  // bookstest: any = books;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    // this.bookService.books$.subscribe((books: any) => {
    //   this.books = books;
    // });
  }
  addToWishList(id: string) {
    this.bookService.addToWishList(id);
  }
}

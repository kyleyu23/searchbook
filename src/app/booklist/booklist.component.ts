import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent implements OnInit {
  books: any = [];
  // books$: any;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.books$.subscribe((books: any) => {
      this.books = books;
      // this.books$ = this.bookService.books$;
    });
  }
  addToWishList(id: string) {
    this.bookService.addToWishList(id);
  }
}

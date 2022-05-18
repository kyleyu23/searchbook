import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book.interface';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent {
  @Input() books: Book[] = [];
  @Output() readonly wishListChange = new EventEmitter<Book>();
}

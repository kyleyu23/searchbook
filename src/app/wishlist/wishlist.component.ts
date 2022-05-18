import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  @Input() wishList: Book[] = [];
  @Output() readonly wishListChange = new EventEmitter<Book>();

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  wishlist: any = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.wishlist$.subscribe((wishlist) => {
      this.wishlist = wishlist;
    });
  }

  delete(id: string) {
    this.bookService.deleteFromWishList(id);
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BooklistComponent } from './booklist/booklist.component';
import { BookService } from './book.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InputboxComponent } from './inputbox/inputbox.component';
import { MatInputModule } from '@angular/material/input';
import { WishlistComponent } from './wishlist/wishlist.component';
@NgModule({
  declarations: [AppComponent, InputboxComponent, BooklistComponent, WishlistComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}

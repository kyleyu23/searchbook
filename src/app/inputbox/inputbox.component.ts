import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, tap } from 'rxjs/operators';
import { BookService } from '../book.service';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.scss'],
})
export class InputboxComponent implements OnInit {
  @ViewChild('inputbox', { static: true })
  inputbox!: ElementRef;

  constructor(private bookservice: BookService) {}

  ngOnInit(): void {
    fromEvent(this.inputbox.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        filter((_) => {
          const keyword = this.inputbox.nativeElement.value;
          return keyword.trim();
        }),
        tap((_) => {
          const keyword = this.inputbox.nativeElement.value.trim();
          this.bookservice.getBooks(keyword);
        })
      )
      .subscribe();
  }
}

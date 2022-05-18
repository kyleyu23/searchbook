import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';
import { BookService } from '../book.service';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.scss'],
})
export class InputboxComponent implements OnDestroy {
  @Output() readonly bookNameChange = new EventEmitter<string>();

  private readonly booknameControl = new FormControl();

  mform: FormGroup = new FormGroup({
    bookname: this.booknameControl,
  });

  private readonly subscription = this.booknameControl.valueChanges
    .pipe(
      debounceTime(500),
      map(() => this.booknameControl.value)
    )
    .subscribe((bookname: string) => {
      this.bookNameChange.emit(bookname);
    });

  constructor(private readonly bookservice: BookService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

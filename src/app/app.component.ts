import {Component, inject} from '@angular/core';
import {BookRepository} from "./shared/books/books.store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  _bookStore = inject(BookRepository)
  books$ = this._bookStore.books$
}

import { createStore, withProps } from '@ngneat/elf';

export interface Book {
  id: number;
  name: string;
  publicationDate: string;
  series: string;
}

export interface BookState {
  books: Book[];
}

const bookStore = createStore(
  { name: 'books' },
  withProps<BookState>({
    books: [{ id: 1, name: 'Test', publicationDate: 'today', series: 'voy' }],
  })
);
export class BookRepository {
  books$ = bookStore.pipe((state) => state);

  // export function updateUser(user: BookProps['user']) {
  //   authStore.update((state) => ({
  //     ...state,
  //     user,
  //   }));
  // }
}

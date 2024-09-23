import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase';

@Injectable()
export class BookService {
  getHello(): string {
    return 'Hello World!';
  }

  getallbooks(): Book[] {
    return books;
  }

  getBookById(id: number): Book | undefined {
    return books.find((book) => book.id === id);
  }

  createBook(book: Partial<Book>): Book {
    const id = books[books.length - 1].id + 1;
    const newBook = {
      id,
      title: book.title ?? '',
      author: book.author ?? '',
      publicationYear: book.publicationYear ?? 0,
    };
    books.push(newBook);
    return newBook;
  }

  updateBook(bookId: number, book: Partial<Book>): Book | undefined {
    const bookIndex = books.findIndex((book) => book.id === bookId);

    if (bookIndex === -1) {
      return undefined;
    }
    const updatedBook = {
      ...books[bookIndex],
      title: book.title ?? books[bookIndex].title,
      author: book.author ?? books[bookIndex].author,
      publicationYear: book.publicationYear ?? books[bookIndex].publicationYear,
    };
    books[bookIndex] = updatedBook;
    return updatedBook;
  }
}

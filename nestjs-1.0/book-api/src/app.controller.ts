import { Body, Controller, Get, Param, Post, Put, Redirect } from '@nestjs/common';
import { BookService } from './app.service';
import { Book } from './FakeDatabase';

@Controller('/books') // this is the root path for this controller
export class BooksController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getHello(): string {
    return this.bookService.getHello();
  }

  @Get('/all') // this is the route path for this method
  getBooks(): Book[] {
    return this.bookService.getallbooks(); // this i where we get the book from the service
  }

  @Get('/:id')
  getBookById(@Param('id') id: string): Book {
    const bookId = +id;
    return this.bookService.getBookById(bookId);
  }

  @Post('/create')
  createBook(@Body() book: Partial<Book>): Book {
    if (!book.title || !book.author) {
      throw new Error('Title and Author are required');
    }
    return this.bookService.createBook(book);
  }

  @Put('/:id')
  updateBook(
    @Param('id') id: string,
    @Body() book: Partial<Book>,
  ): Book | undefined {
    const bookId = +id;
    return this.bookService.updateBook(bookId, book);
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs() {
    return { url: 'https://docs.nestjs.com/v5/' };
  }
}

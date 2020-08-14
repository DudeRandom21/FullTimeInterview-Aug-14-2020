import { Component, OnInit } from '@angular/core';
import { RequestrService } from 'src/app/services/requestr.service';
import { Book } from './books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[];

  constructor(private requestr: RequestrService) { }

  async ngOnInit() {
    const res = await this.requestr.get('https://anapioficeandfire.com/api/books/');
    const body = res.body;
    this.books = body.map((o) => new Book(o));
  }

  async getCharacters(book: Book) {
    const promises = book.characters.map((c) =>
      this.requestr.get(c)
    );

    for (const prom of promises) {
      const character = await prom;
    }
  }

}

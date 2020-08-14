export interface BookI {
  url: string;
  name: string;
  authors: string[];
  released: string;
  isbn: string;
  povCharacters: string[];
}

export class Book {
  id: number;
  title: string;
  authors: string[];
  releaseYear: string;
  isbn: string;
  characters: string[];

  constructor(obj: BookI) {
    return {
      id: parseInt(obj.url[obj.url.length - 1], 10),
      title: obj.name,
      authors: obj.authors,
      releaseYear: obj.released.slice(0, 4),
      isbn: obj.isbn,
      characters: obj.povCharacters,
    };
  }
}

export interface CharacterI {
  name: string;
  culture: string;
  born: string;
  titles: string[];
  aliases: string[];
  povBooks: string[];
}

export class Character {
  name: string;
  culture: string;
  born: string;
  titles: string[];
  aliases: string[];
  showAliases: boolean;
  books: string[];
  showBooks: boolean;

  constructor(obj: CharacterI) {
    console.log(obj);
    return {
      name: obj.name,
      culture: obj.culture,
      born: obj.born,
      titles: obj.titles,
      aliases: obj.aliases,
      showAliases: false,
      books: obj.povBooks,
      showBooks: false,
    };
  }
}

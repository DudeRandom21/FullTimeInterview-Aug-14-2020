import { Component, OnInit } from '@angular/core';
import { RequestrService } from 'src/app/services/requestr.service';
import { Character } from '../books/books';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Character[];
  routeSubscription: Subscription;

  constructor(
    private requestr: RequestrService,
    private route: ActivatedRoute
  ) {
    this.routeSubscription = this.route.params.subscribe(() => {
      this.ngOnInit();
    });
  }

  async ngOnInit() {
    const bookId = +this.route.snapshot.paramMap.get('bookId');
    const res = await this.requestr.get(
      `https://anapioficeandfire.com/api/books/${bookId}`
    );
    const characters = res.body.povCharacters;
    this.characters = await this.getCharacters(characters);
    console.log(this.characters);
  }

  async getCharacters(links: any[]): Promise<Character[]> {
    const promises = links.map((c) => this.requestr.get(c));

    const characters = [];
    for (const prom of promises) {
      const res = await prom;
      characters.push(new Character(res.body));
    }
    // TODO: extract the book names
    return Promise.resolve(characters);
  }

}

import { SelectCharService } from './../select-char.service';
import { Component, OnInit } from '@angular/core';
import { CharacterfeatureService } from '../characterfeatures.service';

@Component({
  selector: 'app-selectcharacter',
  templateUrl: './selectcharacter.component.html',
  styleUrls: ['./selectcharacter.component.css']
})
export class SelectcharacterComponent implements OnInit {

  heroes; // all the heroes
  hero; // hero par rapport a son id
  heroesIds = [
    [366, 379, 210],
    [123, 254, 58],
    [79, 494, 528]
  ];

  constructor(private CharacterfeaturesService: CharacterfeatureService, private selectCharService: SelectCharService) { }

  ngOnInit() {
    this.CharacterfeaturesService.getHeroes().subscribe(heroes => {
      // console.log(heroes);
      this.heroes = heroes;
    });
  }

  selectHero(hero) {
    if (!this.selectCharService.player1) {
      this.selectCharService.player1 = hero;
    } else {
      this.selectCharService.player2 = hero;
    }
  }

  getCreator(hero) {
    if (hero.biography.publisher && hero.biography.publisher != "") {
      return hero.biography.publisher;
    } else {
      return hero.biography.fullName;
    }
  }

}

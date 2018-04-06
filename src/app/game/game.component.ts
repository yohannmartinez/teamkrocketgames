import { Component, OnInit } from '@angular/core';
import { CharacterfeatureService } from '../characterfeatures.service';
import { SelectCharService } from '../select-char.service';

import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  

  heroes; // all the heroes
  hero; // hero par rapport a son id
  heroesIds = [
    [366, 379, 210],
    [123, 254, 58],
    [79, 494, 528]
  ];



  constructor(private CharacterfeaturesService: CharacterfeatureService, private selectCharService: SelectCharService, private router: Router) { }

  ngOnInit() {
    this.CharacterfeaturesService.getHeroes().subscribe(heroes => {
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

}

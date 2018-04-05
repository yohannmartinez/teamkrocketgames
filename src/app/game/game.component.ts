import { Component, OnInit } from '@angular/core';
import { CharacterfeatureService } from '../characterfeatures.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  heroes; // all the heroes
  hero; // hero par rapport a son id
  constructor(private CharacterfeaturesService: CharacterfeatureService) { }

  ngOnInit() {
    this.CharacterfeaturesService.getHeroes().subscribe(heroes => {
      // console.log(heroes);
      this.heroes = heroes;
    });
  }

}

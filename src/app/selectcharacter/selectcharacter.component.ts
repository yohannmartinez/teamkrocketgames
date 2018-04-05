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
  constructor(private CharacterfeaturesService: CharacterfeatureService) { }

  ngOnInit() {
    this.CharacterfeaturesService.getHeroes().subscribe(heroes => {
      // console.log(heroes);
      this.heroes = heroes;
    });
  }

}

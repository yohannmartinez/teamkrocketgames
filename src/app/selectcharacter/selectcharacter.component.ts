import { SelectCharService } from './../select-char.service';
import { Component, OnInit } from '@angular/core';
import { CharacterfeatureService } from '../characterfeatures.service';
import { RouterModule, Routes, Router } from '@angular/router';

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



  constructor(private CharacterfeaturesService: CharacterfeatureService, private selectCharService: SelectCharService, private router: Router) { }

  ngOnInit() {
    this.CharacterfeaturesService.getHeroes().subscribe(heroes => {
      // console.log(heroes);
      this.heroes = heroes;
    });
  }

  go(){

    if(this.selectCharService.player2 && this.selectCharService.player1 && this.selectCharService.player2.id !== this.selectCharService.player1.id){
      
      this.router.navigate(['game']);
    }
  }

  resetCharacter(){
    this.selectCharService.player2 = undefined;
    this.selectCharService.player1 = undefined;
  }

  selectHero(hero) {
    if (!this.selectCharService.player1) {
      this.selectCharService.player1 = hero;
      this.selectCharService.player1.life = 100;      
    } else {
      this.selectCharService.player2 = hero;
      this.selectCharService.player2.life = 100; 
    }
  }

  

}

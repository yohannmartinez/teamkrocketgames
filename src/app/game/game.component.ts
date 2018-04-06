import { CharacterfeatureService } from './../characterfeatures.service';
import { SelectCharService } from './../select-char.service';
import { SelectcharacterComponent } from './../selectcharacter/selectcharacter.component';
import { Component, OnInit } from '@angular/core';

import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  turn = 1;

  heroes; // all the heroes
  hero; // hero par rapport a son id
  heroesIds = [
    [366, 379, 210],
    [123, 254, 58],
    [79, 494, 528]
  ];

  changeTurn() {
    this.turn = this.turn === 1 ? 2 : 1;
  }

  colorBar() {
    if (this.selectCharService.player2.life <= 50 && this.selectCharService.player2.life > 20) {
      document.getElementById('lifeplayer2').style.backgroundColor = "orange";
    } else if (this.selectCharService.player2.life <= 20) {
      document.getElementById('lifeplayer2').style.backgroundColor = "red";
    } else {
      document.getElementById('lifeplayer2').style.backgroundColor = "#00063B";
    }
    if (this.selectCharService.player1.life <= 50 && this.selectCharService.player2.life > 20) {
      document.getElementById('lifeplayer1').style.backgroundColor = "orange";
    } else if (this.selectCharService.player1.life <= 20) {
      document.getElementById('lifeplayer1').style.backgroundColor = "red";
    } else {
      document.getElementById('lifeplayer1').style.backgroundColor = "#001a00";
    }
  }

  attack() {
    if (this.turn == 2) {
      this.selectCharService.player1.life = this.selectCharService.player1.life - Math.floor((Math.random() * this.selectCharService.player2.powerstats.strength) + 1);
    } else {
      this.selectCharService.player2.life = this.selectCharService.player2.life - Math.floor((Math.random() * this.selectCharService.player1.powerstats.strength) + 1);
    } this.colorBar();

    if (this.selectCharService.player1.life < 0) {
      this.selectCharService.player1.life = 0;
    }
    if (this.selectCharService.player2.life < 0) {
      this.selectCharService.player2.life = 0;
    }

    if (this.selectCharService.player1.life <= 0 || this.selectCharService.player2.life <= 0) {
      alert('fini')
    }
    this.colorBar();
    this.changeTurn();

  }

  heal() {
    if (this.turn == 2) {
      this.selectCharService.player2.life = this.selectCharService.player2.life + Math.floor((Math.random() * 100) + 1);
    } else {
      this.selectCharService.player1.life = this.selectCharService.player1.life + Math.floor((Math.random() * 100) + 1);
    }

    if (this.selectCharService.player1.life > 100) {
      this.selectCharService.player1.life = 100;
    }


    if (this.selectCharService.player2.life > 100) {
      this.selectCharService.player2.life = 100;
    }

    if (this.selectCharService.player1.life <= 0 || this.selectCharService.player2.life <= 0) {
      alert('fini');
    }
    this.colorBar();
    this.changeTurn();
  }


  special() {

    if (this.selectCharService.player1.id == 176 && this.selectCharService.player2.id == 502 || this.selectCharService.player2.id == 176 && this.selectCharService.player1.id == 502) {
      alert('combat mortel en cours');
      this.router.navigate(['combatmortel']);
    }

    if (this.selectCharService.player1.life > 100) {
      this.selectCharService.player1.life = 100;
    }

    if (this.selectCharService.player1.id == 643 || this.selectCharService.player2.id == 643) {
      if (this.turn == 2) {
        this.selectCharService.player1.life = this.selectCharService.player1.life + 1 ;
      } else {
        this.selectCharService.player2.life = this.selectCharService.player2.life - 1 ;
      } this.colorBar(); this.changeTurn();

      if (this.selectCharService.player1.life < 0) {
        this.selectCharService.player1.life = 0;
      }
      if (this.selectCharService.player2.life < 0) {
        this.selectCharService.player2.life = 0;
      }

      if (this.selectCharService.player1.life <= 0 || this.selectCharService.player2.life <= 0) {
        alert('fini')
      }
      this.colorBar();
      this.changeTurn();
    }

    if (this.selectCharService.player2.life > 100) {
      this.selectCharService.player2.life = 100;
    }

    if (this.selectCharService.player1.life <= 0 || this.selectCharService.player2.life <= 0) {
      alert('fini')
    }
    this.colorBar();
    this.changeTurn();
  }

  constructor(private CharacterfeaturesService: CharacterfeatureService, private selectCharService: SelectCharService, private router: Router) { }

  ngOnInit() {
    this.CharacterfeaturesService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }


}

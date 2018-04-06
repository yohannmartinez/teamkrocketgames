import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { SelectcharacterComponent } from './selectcharacter/selectcharacter.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CharacterfeatureService } from './characterfeatures.service';
import { HttpClientModule } from '@angular/common/http';
import { SelectCharService } from './select-char.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'selectcharacter', component: SelectcharacterComponent },
  { path: 'test', component: TestComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SelectcharacterComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    CharacterfeatureService,
    SelectCharService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

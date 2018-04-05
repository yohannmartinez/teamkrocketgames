import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { SelectcharacterComponent } from './selectcharacter/selectcharacter.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'game', component: GameComponent}, 
  { path: 'selectcharacter', component: SelectcharacterComponent},
   
]


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SelectcharacterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

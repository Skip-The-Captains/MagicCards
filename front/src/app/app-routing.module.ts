import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCardComponent } from './add-card/add-card.component';
import { AddDeckComponent } from './add-deck/add-deck.component';
import { CardsComponent } from './cards/cards.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'add-card', component: AddCardComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'add-deck', component: AddDeckComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

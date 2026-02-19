import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Game1 } from './components/game1/game1';
import { Game2 } from './components/game2/game2';
import { Game3 } from './components/game3/game3';
import { Game4 } from './components/game4/game4';
import { Game5 } from './components/game5/game5';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'game1', component: Game1 },
  { path: 'game2', component: Game2 },
  { path: 'game3', component: Game3 },
  { path: 'game4', component: Game4 },
  { path: 'game5', component: Game5 },
];

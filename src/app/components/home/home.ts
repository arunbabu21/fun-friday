import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  scores = [
    { game: 'Game 1', mohan: 0, shanika: 0 },
    { game: 'Game 2', mohan: 0, shanika: 0 },
    { game: 'Game 3', mohan: 0, shanika: 0 },
    { game: 'Game 4', mohan: 0, shanika: 0 },
    { game: 'Game 5', mohan: 0, shanika: 0 },
  ];

  getMohanTotal(): number {
    return this.scores.reduce((sum, score) => sum + score.mohan, 0);
  }

  getShaniakaTotal(): number {
    return this.scores.reduce((sum, score) => sum + score.shanika, 0);
  }

  setScore(score: any, team: 'mohan' | 'shanika', value: number): void {
    if (value === 0 || value === 1) {
      score[team] = value;
    }
  }

  validateScore(score: any, team: 'mohan' | 'shanika'): void {
    const value = score[team];
    if (value !== 0 && value !== 1) {
      score[team] = value === 1 ? 1 : 0;
    }
  }
}

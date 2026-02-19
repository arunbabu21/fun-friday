import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ScoreService, ScoreRow } from '../../services/score.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  scores: ScoreRow[] = [];

  constructor(private scoreService: ScoreService) {
    this.scores = this.scoreService.getScores();
  }

  getMohanTotal(): number {
    return this.scoreService.getMohanTotal();
  }

  getShaniakaTotal(): number {
    return this.scoreService.getShanikaTotal();
  }

  setScore(score: ScoreRow, team: 'mohan' | 'shanika', value: number): void {
    this.scoreService.setScore(score.game, team, value === 1 ? 1 : 0);
  }

  validateScore(score: ScoreRow, team: 'mohan' | 'shanika'): void {
    const value = score[team];
    if (value !== 0 && value !== 1) {
      this.scoreService.setScore(score.game, team, value === 1 ? 1 : 0);
    }
  }
}

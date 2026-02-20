import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game1',
  imports: [RouterLink, CommonModule],
  templateUrl: './game1.html',
  styleUrl: './game1.css',
})
export class Game1 {
  // 2D array for clue grid (6 columns x 5 rows)
  clueGrid = signal<(string | null)[][]>(
    Array(6).fill(null).map(() => Array(5).fill(null))
  );

  // Sample clues for each position
  private clues = [
    ['Famous actor', 'Born in 1970', 'Starred in action movies', 'Has a beard', 'Won an Oscar'],
    ['Pop singer', 'From USA', 'Started in 2010s', 'Has blonde hair', 'Won Grammy'],
    ['TV character', 'Comedy show', 'Wears glasses', 'Works in office', 'Has catchphrase'],
    ['Superhero', 'Marvel character', 'Has super strength', 'Wears red suit', 'From New York'],
    ['Historical figure', 'Scientist', 'Lived in 1800s', 'Made discovery', 'Nobel prize winner'],
    ['Fictional character', 'From book series', 'Young wizard', 'Has scar', 'Fights dark wizard']
  ];

  // Answers for each column
  private answers = [
    'Chris Hemsworth',
    'Taylor Swift',
    'Michael Scott',
    'Spider-Man',
    'Marie Curie',
    'Harry Potter'
  ];

  // Track revealed answers
  revealedAnswers = signal<boolean[]>(Array(6).fill(false));

  revealClue(column: number, row: number) {
    const currentGrid = this.clueGrid();
    currentGrid[column][row] = this.clues[column][row];
    this.clueGrid.set([...currentGrid]);
  }

  revealAnswer(column: number) {
    const currentRevealed = this.revealedAnswers();
    currentRevealed[column] = true;
    this.revealedAnswers.set([...currentRevealed]);
  }

  isRevealed(column: number, row: number): boolean {
    return this.clueGrid()[column][row] !== null || this.revealedAnswers()[column];
  }

  getClueName(column: number, row: number): string {
    return `Clue ${row + 1}`;
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game6',
  imports: [RouterLink],
  templateUrl: './game6.html',
  styleUrl: './game6.css'
})
export class Game6 {
  revealedCells: number[] = [];
  currentImage: number | null = null;

  revealCell(cellNumber: number) {
    if (!this.revealedCells.includes(cellNumber)) {
      this.revealedCells.push(cellNumber);
    }
  }

  selectImage(imageNumber: number) {
    this.currentImage = imageNumber;
    this.resetGame();
  }

  showFullImage() {
    this.revealedCells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  }

  resetGame() {
    this.revealedCells = [];
  }
}

import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game3',
  imports: [RouterLink, CommonModule],
  templateUrl: './game3.html',
  styleUrl: './game3.css',
})
export class Game3 {
  remaining = signal(60);
  running = signal(false);
  message = signal('');
  private intervalId: any = null;

  toggleCountdown() {
    if (this.running()) {
      this.stopCountdown();
    } else {
      this.startCountdown();
    }
  }

  startCountdown() {
    this.stopCountdown();
    if (this.remaining() <= 0 || this.remaining() > 60) {
      this.remaining.set(60);
    }
    this.message.set('Ready');
    this.running.set(true);
    this.intervalId = setInterval(() => {
      const val = this.remaining();
      if (val <= 0) {
        this.stopCountdown();
        this.message.set('Stop!!!!! Timeout');
        setTimeout(() => {
          this.remaining.set(60);
        }, 1000);
        return;
      }
      this.remaining.set(val - 1);
    }, 1000);
  }

  stopCountdown() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.running.set(false);
  }

  ngOnDestroy() {
    this.stopCountdown();
  }

  // Puzzle dialog
  selectedPuzzle = signal<number | null>(null);
  showAnswer = signal(false);
  puzzles = [
    {
      id: 1, title: 'Escape', question: `You are in a room with two doors:
One leads to freedom, One leads to danger. There are two guards: -One always tells the truth. 
-One always lies. You can ask only ONE question to ONE guard. What do you ask?`, answer: `“Which door would the other guard say leads to freedom?”
Then choose the opposite door.` },
    {
      id: 2, title: 'Friends', question: `Five friends sit at a table.They all order the same drink.
Four of them drink quickly and leave.One drinks slowly and dies.The drinks were poisoned.
How did the other four survive?`, answer: `The poison was in the ice.The four drank quickly before the ice melted.`
    },

    {
      id: 3, title: 'Farmer', question: `A farmer needs to cross a river with:
A wolf,A goat, A cabbage. Boat can carry only one at a time.
If left alone:
Wolf eats goat
Goat eats cabbage
How does he cross safely?`, answer: `Take goat,

Come back,

Take wolf,

Bring goat back,

Take cabbage,

Come back,

Take goat`
    },

    { id: 4, title: 'Boxes', question: `You have 3 boxes:

Box 1: Apples

Box 2: Oranges

Box 3: Apples & Oranges

All labels are WRONG.

You can take only ONE fruit from ONE box.

How do you correctly label all boxes?`, answer: `Take a fruit from the box labeled "Apples & Oranges". Since all labels are wrong, it must be either apples or oranges. If it is an apple, label it "Apples". Then the box labeled "Oranges" must be "Apples & Oranges", and the remaining box is "Oranges". If it is an orange, label it "Oranges". Then the box labeled "Apples" must be "Apples & Oranges", and the remaining box is "Oranges".`},

    { id: 5, title: 'Jug', question: `You have a 5-liter jug and a 3-liter jug.
No measurements marked.
How do you measure exactly 4 liters?`, answer: `Fill the 3-liter jug, pour it into the 5-liter jug.
Fill the 3-liter jug again, pour it into the 5-liter jug until it's full.
The remaining water in the 3-liter jug is exactly 1 liter.
Empty the 5-liter jug and pour the 1 liter from the 3-liter jug into it.
Fill the 3-liter jug and pour it into the 5-liter jug. Now you have exactly 4 liters.` },
    {
      id: 6, title: 'Hat', question: `Three people stand in a line.
Each wears a red or blue hat.
They can see hats in front, not their own.
They must guess their hat color.
After silence from first two, third answers correctly.`, answer: `“Logical elimination based on others not answering.` },
  ];

  openPuzzle(id: number) {
    this.selectedPuzzle.set(id);
    this.showAnswer.set(false);
  }

  closePuzzle() {
    this.selectedPuzzle.set(null);
    this.showAnswer.set(false);
  }

  toggleAnswer() {
    this.showAnswer.set(!this.showAnswer());
  }

  getPuzzleQuestion(): string {
    const id = this.selectedPuzzle();
    if (!id) return '';
    const puzzle = this.puzzles.find(p => p.id === id);
    return puzzle ? puzzle.question : '';
  }

  getPuzzleAnswer(): string {
    const id = this.selectedPuzzle();
    if (!id) return '';
    const puzzle = this.puzzles.find(p => p.id === id);
    return puzzle ? puzzle.answer : '';
  }
}

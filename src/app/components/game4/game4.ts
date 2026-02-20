import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game4',
  imports: [RouterLink, CommonModule],
  templateUrl: './game4.html',
  styleUrl: './game4.css',
})
export class Game4 {
  // modal signals
  showModal = signal(false);
  currentCategory = signal('');
  currentQuestion = signal('');
  modalTimeRemaining = signal(5);
  private modalTimeoutId: any = null;
  private modalIntervalId: any = null;

  // dummy questions for each category
  private questions = {
    trial: [
      'Name 3 fruits.',
    ],
    task1: [
      'Name 3 things that are cold.',
    ],
    task2: [
      'Name 3 things you lose easily.',
    ],
    task3: [
      'Name 3 things that are transparent.'
    ],
    task4: [
      'Name 3 things that are square.'
    ],
    task5: [
      'Name 3 things found in a wallet.'
    ],
    task6: [
      'Name 3 countries starting with “B”..',
    ],
    task7: [
      'Name 3 words that start and end with same letter..'
    ],
    task8: [
      'Name 3 palindromes.'
    ],

  };

  openQuestion(category: string) {
    const categoryQuestions = this.questions[category as keyof typeof this.questions];
    const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];

    this.currentCategory.set(category);
    this.currentQuestion.set(randomQuestion);
    this.showModal.set(true);

    // Start 5-second countdown
    this.modalTimeRemaining.set(5);
    this.modalIntervalId = setInterval(() => {
      const currentTime = this.modalTimeRemaining();
      if (currentTime <= 0) {
        this.closeModal();
        return;
      }
      this.modalTimeRemaining.set(currentTime - 1);
    }, 1000);

    // Auto-close modal after 6 seconds (1 second after countdown reaches 0)
    this.modalTimeoutId = setTimeout(() => {
      this.closeModal();
    }, 6000);
  }

  getTaskNumber(category: string): number {
    const taskMap: { [key: string]: number } = {
      'trial': 1,
      'countries': 2,
      'foods': 3,
      'sports': 4,
      'movies': 5
    };
    return taskMap[category] || 0;
  }

  closeModal() {
    this.showModal.set(false);
    // Clear any pending auto-close timeout
    if (this.modalTimeoutId) {
      clearTimeout(this.modalTimeoutId);
      this.modalTimeoutId = null;
    }
    // Clear countdown interval
    if (this.modalIntervalId) {
      clearInterval(this.modalIntervalId);
      this.modalIntervalId = null;
    }
  }

  ngOnDestroy() {
    this.closeModal();
  }
}

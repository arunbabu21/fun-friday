import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game2',
  imports: [RouterLink, CommonModule],
  templateUrl: './game2.html',
  styleUrl: './game2.css',
})
export class Game2 {
  // existing timer signals
  remaining = signal(10);
  running = signal(false);
  message = signal('');
  private intervalId: any = null;

  // images for Game2 - files should be placed in `src/assets/game2/`
  images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
  ];
  // no image selected by default; only show after user clicks a button
  selectedImage = signal<string | null>(null);

  showImage(name: string) {
    this.selectedImage.set(name);
  }

  // helper to build full asset path
  getImagePath(name: string | null) {
    return name ? '/assets/game2/' + name : '';
  }

  toggleCountdown() {
    if (this.running()) {
      this.stopCountdown();
    } else {
      this.startCountdown();
    }
  }

  startCountdown() {
    this.stopCountdown();
    if (this.remaining() <= 0 || this.remaining() > 10) {
      this.remaining.set(10);
    }
    this.message.set('Ready');
    this.running.set(true);
    this.intervalId = setInterval(() => {
      const val = this.remaining();
      if (val <= 0) {
        this.stopCountdown();
        this.message.set('Stop!!!!! Timeout');
        // hide any shown image when time runs out
        this.selectedImage.set(null);
        setTimeout(() => {
          this.remaining.set(10);
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
}

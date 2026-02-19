import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game5',
  imports: [RouterLink],
  templateUrl: './game5.html',
  styleUrl: './game5.css',
})
export class Game5 {
  remaining = signal(30);
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
    if (this.remaining() <= 0 || this.remaining() > 30) {
      this.remaining.set(30);
    }
    this.message.set('Ready');
    this.running.set(true);
    this.intervalId = setInterval(() => {
      const val = this.remaining();
      if (val <= 0) {
        this.stopCountdown();
        this.message.set('Stop!!!!! Timeout');
        setTimeout(() => {
          this.remaining.set(30);
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

import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game1',
  imports: [RouterLink],
  templateUrl: './game1.html',
  styleUrl: './game1.css',
})
export class Game1 {
  // reactive signals for timer state
  remaining = signal(30);
  running = signal(false);
  message = signal('');
  private intervalId: any = null;

  // Toggle start / pause
  toggleCountdown() {
    if (this.running()) {
      this.stopCountdown();
    } else {
      this.startCountdown();
    }
  }

  startCountdown() {
    // ensure any previous interval cleared
    this.stopCountdown();
    // if at initial state, set to 30
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
        // auto-reset after short delay so user sees 0 and message
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

  // cleanup when component destroyed
  ngOnDestroy() {
    this.stopCountdown();
  }
}

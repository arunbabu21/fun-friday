import { Injectable } from '@angular/core';

export type ScoreRow = { game: string; mohan: number; shanika: number };

const STORAGE_KEY = 'funfriday_scores_v1';

@Injectable({ providedIn: 'root' })
export class ScoreService {
  scores: ScoreRow[] = [
    { game: 'Game 1', mohan: 0, shanika: 0 },
    { game: 'Game 2', mohan: 0, shanika: 0 },
    { game: 'Game 3', mohan: 0, shanika: 0 },
    { game: 'Game 4', mohan: 0, shanika: 0 },
    { game: 'Game 5', mohan: 0, shanika: 0 },
  ];

  constructor() {
    this.load();
  }

  private save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.scores));
    } catch (e) {
      // ignore storage errors
    }
  }

  private load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ScoreRow[];
        if (Array.isArray(parsed)) {
          // basic validation/shape normalization
          this.scores = parsed.map((r) => ({
            game: String(r.game || ''),
            mohan: Number(r.mohan) || 0,
            shanika: Number(r.shanika) || 0,
          }));
        }
      }
    } catch (e) {
      // ignore parse errors
    }
  }

  getScores(): ScoreRow[] {
    return this.scores;
  }

  setScore(game: string, team: 'mohan' | 'shanika', value: number) {
    const row = this.scores.find((s) => s.game === game);
    if (!row) return;
    row[team] = value === 1 ? 1 : 0;
    this.save();
  }

  getMohanTotal(): number {
    return this.scores.reduce((sum, s) => sum + (s.mohan || 0), 0);
  }

  getShanikaTotal(): number {
    return this.scores.reduce((sum, s) => sum + (s.shanika || 0), 0);
  }
}

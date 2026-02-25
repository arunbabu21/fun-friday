import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game6 } from './game6';

describe('Game6', () => {
  let component: Game6;
  let fixture: ComponentFixture<Game6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Game6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Game6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

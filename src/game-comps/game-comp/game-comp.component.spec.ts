import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCompComponent } from './game-comp.component';

describe('GameCompComponent', () => {
  let component: GameCompComponent;
  let fixture: ComponentFixture<GameCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameCompComponent]
    });
    fixture = TestBed.createComponent(GameCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInfoCardComponent } from './stock-info-card.component';

describe('StockInfoCardComponent', () => {
  let component: StockInfoCardComponent;
  let fixture: ComponentFixture<StockInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockInfoCardComponent]
    });
    fixture = TestBed.createComponent(StockInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

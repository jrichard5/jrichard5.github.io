import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockGraphComponent } from './stock-graph.component';

describe('StockGraphComponent', () => {
  let component: StockGraphComponent;
  let fixture: ComponentFixture<StockGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockGraphComponent]
    });
    fixture = TestBed.createComponent(StockGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

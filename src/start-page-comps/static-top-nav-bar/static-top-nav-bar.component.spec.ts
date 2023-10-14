import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticTopNavBarComponent } from './static-top-nav-bar.component';

describe('StaticTopNavBarComponent', () => {
  let component: StaticTopNavBarComponent;
  let fixture: ComponentFixture<StaticTopNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticTopNavBarComponent]
    });
    fixture = TestBed.createComponent(StaticTopNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

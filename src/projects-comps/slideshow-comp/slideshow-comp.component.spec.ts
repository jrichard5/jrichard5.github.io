import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowCompComponent } from './slideshow-comp.component';

describe('SlideshowCompComponent', () => {
  let component: SlideshowCompComponent;
  let fixture: ComponentFixture<SlideshowCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideshowCompComponent]
    });
    fixture = TestBed.createComponent(SlideshowCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

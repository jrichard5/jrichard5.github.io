import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNavCompComponent } from './project-nav-comp.component';

describe('ProjectNavCompComponent', () => {
  let component: ProjectNavCompComponent;
  let fixture: ComponentFixture<ProjectNavCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectNavCompComponent]
    });
    fixture = TestBed.createComponent(ProjectNavCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

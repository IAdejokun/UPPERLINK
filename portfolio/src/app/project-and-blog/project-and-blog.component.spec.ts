import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAndBlogComponent } from './project-and-blog.component';

describe('ProjectAndBlogComponent', () => {
  let component: ProjectAndBlogComponent;
  let fixture: ComponentFixture<ProjectAndBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAndBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAndBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogInputComponent } from './blog-input.component';

describe('BlogInputComponent', () => {
  let component: BlogInputComponent;
  let fixture: ComponentFixture<BlogInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

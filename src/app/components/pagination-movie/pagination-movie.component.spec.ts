import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationMovieComponent } from './pagination-movie.component';

describe('PaginationMovieComponent', () => {
  let component: PaginationMovieComponent;
  let fixture: ComponentFixture<PaginationMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationCharacterComponent } from './pagination-character.component';

describe('PaginationCharacterComponent', () => {
  let component: PaginationCharacterComponent;
  let fixture: ComponentFixture<PaginationCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

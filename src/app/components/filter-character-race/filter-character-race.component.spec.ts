import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCharacterRaceComponent } from './filter-character-race.component';

describe('FilterCharacterRaceComponent', () => {
  let component: FilterCharacterRaceComponent;
  let fixture: ComponentFixture<FilterCharacterRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCharacterRaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCharacterRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

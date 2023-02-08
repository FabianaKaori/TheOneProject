import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHomeTargetComponent } from './map-home-target.component';

describe('MapHomeTargetComponent', () => {
  let component: MapHomeTargetComponent;
  let fixture: ComponentFixture<MapHomeTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapHomeTargetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapHomeTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardCharacterComponent } from './card-character.component';

describe('CardCharacterComponent', () => {
  let component: CardCharacterComponent;
  let fixture: ComponentFixture<CardCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCharacterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('teste', () => {
    component.name = 'Gandalf';
    fixture.detectChanges();

    const nameCharacter = fixture.debugElement.query(By.css('.description'));
    expect(nameCharacter.nativeElement.textContent.trim()).toEqual('Gandalf');

  }
  )
}
);

import { Component, EventEmitter, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter-character',
  templateUrl: './filter-character.component.html',
  styleUrls: ['./filter-character.component.css']
})
export class FilterCharacterComponent {
  faSearch = faSearch;
  name?: string

  @Output() characterName = new EventEmitter<string>()

  filterCharacter = () => {
    this.characterName.emit(this.name)
  }

}


// <!--
// Human
// Elf
// Hobbit
// Orc
// Goblin
// Dwarf
// Maiar
// Dragon
// Ent
// Eagle
// Balrog
//  -->

import {NgIf} from '@angular/common'
import { Component } from '@angular/core';
import { CharacterServiceService } from 'src/app/services/character-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  characters:any
  totalPages?: number

  constructor(private characterService: CharacterServiceService){}

  ngOnInit(){
    this.getCharacters(1)
  }

 getCharacters = (page:number) =>{
    this.characterService.getCharacter(page).subscribe(response => {
      this.characters = response.docs
      this.totalPages = response.pages
    })
  }

  handleCurrentPage = (page: number) =>{
    this.getCharacters(page)
  }
}

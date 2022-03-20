import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-character-add',
  templateUrl: './character-add.component.html',
  styleUrls: ['./character-add.component.css']
})
export class CharacterAddComponent implements OnInit {

  character: Character = {
    id: "",
    name:"",
    status:"",
    species:"",
    gender:"",
    origin:"",
    location:"",
    image:""
  };
  submitted = false;

  constructor(private charactersService: CharactersService){ }

  ngOnInit(): void {
  }

  saveCharacter(): void{
    const data = {
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      location: this.character.location,
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    };

    this.charactersService.add(data).
      subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error =>{
          console.log(error);
      });
  };

  newCharacter(): void{
    this.submitted = false;
    this.character = {
      name: "",
      status: "",
      species: "",
      gender: "",
      origin: "",
      location: ""
    };
  }

}

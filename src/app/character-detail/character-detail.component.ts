import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {



  character:any = null;

  id:any = this.route.snapshot.paramMap.get('id');
  constructor(private charactersService: CharactersService, private route: ActivatedRoute,private router: Router) {}

  ngOnInit() {
    this.charactersService.getById(this.id).subscribe(result => this.character = result);
  }

  updateStatus(status: string): void {
    const data = {
      name: this.character.name,
      gender: this.character.gender,
      species: this.character.species,
      origin: this.character.origin,
      image: this.character.image,
      status: status
    };

    this.charactersService.update(this.character.id, data).subscribe (response => {
      this.character.status = status;
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }

  deleteCharacter(): void {
    this.charactersService.delete(this.character.id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/characters'])
      },
      error =>{
        console.log(error);
      });
  }

}

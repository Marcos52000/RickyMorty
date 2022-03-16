import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character:any = null;

  id:any = this.route.snapshot.paramMap.get('id');
  constructor(private charactersService: CharactersService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.charactersService.getById(this.id).subscribe(result => this.character = result);
  }


}

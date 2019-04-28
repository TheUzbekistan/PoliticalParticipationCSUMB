import { Component, OnInit } from '@angular/core';
import { Pet } from "../pet";
import { GetsetpetService } from '../getsetpet.service';

@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.scss']
})

export class PetitionComponent implements OnInit {
  petitions: Pet[];
  
  
  constructor(private getsetpetService: GetsetpetService) { }

  ngOnInit() {
     this.getPets();
  }

  getPets(): void{
    this.getsetpetService.getPet()
    .subscribe(petitions => this.petitions = petitions);
  }
}

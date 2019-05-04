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
  testpet : Pet[] = [
    { _id: 'a000', title: 'Petition1', description: 'description1', numSignatures: 77},
    { _id: 'a001', title: 'Petition2', description: 'description2', numSignatures: 1},
    { _id: 'a002', title: 'Petition3', description: 'description3', numSignatures: 3},
    { _id: 'a003', title: 'Petition4', description: 'description4', numSignatures: 770000000000}
  ];

  selectedpet : Pet;
  
  constructor(private getsetpetService: GetsetpetService) { }

  ngOnInit() {
     this.getPets();
     //this.selectedpet.title = '';
  }

  getPets(): void{
    this.getsetpetService.getPet()
    .subscribe(petitions => this.petitions = petitions);
  }
  onSelect(pet: Pet): void{
    this.selectedpet = pet;
    console.log("selectedpet set to :", this.selectedpet.title)
  }
}

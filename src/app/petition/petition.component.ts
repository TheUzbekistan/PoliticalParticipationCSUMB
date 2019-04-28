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
    { _id: 'a000', title: 'Petition1', descriptions: 'description1', numSignatures: 77},
    { _id: 'a001', title: 'Petition2', descriptions: 'description2', numSignatures: 1},
    { _id: 'a002', title: 'Petition3', descriptions: 'description3', numSignatures: 3},
    { _id: 'a003', title: 'Petition4', descriptions: 'description4', numSignatures: 770000000000}
  ];
  
  constructor(private getsetpetService: GetsetpetService) { }

  ngOnInit() {
     this.getPets();
  }

  getPets(): void{
    this.getsetpetService.getPet()
    .subscribe(petitions => this.petitions = petitions);
  }
}

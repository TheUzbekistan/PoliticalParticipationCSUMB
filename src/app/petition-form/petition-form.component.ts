import { Component, OnInit } from '@angular/core';
import { GetsetpetService } from '../getsetpet.service';
import { SupportPetitionService } from '../support-petition.service';
import { Router } from '@angular/router'
import { Pet } from '../pet';


@Component({
  selector: 'app-petition-form',
  templateUrl: './petition-form.component.html',
  styleUrls: ['./petition-form.component.scss']
})
export class PetitionFormComponent implements OnInit {
  temppet : Pet = { _id: 'a000', title: 'Petition1', description: 'Information about thfh', numSignatures: 77};

  constructor(private getpet : GetsetpetService, private supportService: SupportPetitionService, private router:Router) { }

  ngOnInit() {
  }
  onClick(){
    this.getpet.setPet(this.temppet).subscribe(temp => {console.log(temp)});
    console.log("Hello!");  
  }

  addPetition(email, title, description) {
    this.supportService.newPetition(email, title, description).subscribe();
  }
}

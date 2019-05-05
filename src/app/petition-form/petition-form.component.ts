import { Component, OnInit } from '@angular/core';
import { GetsetpetService } from '../getsetpet.service';
import { Pet } from '../pet';
import { timer } from 'rxjs';


@Component({
  selector: 'app-petition-form',
  templateUrl: './petition-form.component.html',
  styleUrls: ['./petition-form.component.scss']
})
export class PetitionFormComponent implements OnInit {
  temppet : Pet = { _id: 'a000', title: 'Petition1', description: 'Information about thfh', numSignatures: 77};

  constructor(private getpet : GetsetpetService) { }

  ngOnInit() {
  }
  onClick(){
    this.getpet.setPet(this.temppet).subscribe(temp => {console.log(temp)});
    console.log("Hello!");  
  }
  
}

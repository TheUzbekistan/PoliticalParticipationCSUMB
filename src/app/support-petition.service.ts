import { Injectable } from '@angular/core';
import { Pet } from './pet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SupportPetitionService {

  supportedPetition: Pet;
  email: string;
  private petUrl = 'https://petitions-backend-csumb.herokuapp.com/getPetitionByTitle/';
  

  constructor(private http: HttpClient) { }

  assignPet(pet) {
    this.supportedPetition = pet;
  }

  newSupport(pet: Pet) {
    console.log(pet);
    //var tempArr = [];
    //tempArr['title'] = "Hi";
    //tempArr['description'] = "AHOY";
    return this.http.get(this.petUrl + "This is a title")
  }

  

}

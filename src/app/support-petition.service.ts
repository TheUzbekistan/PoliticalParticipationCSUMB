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
  private signPetUrl = 'https://petitions-backend-csumb.herokuapp.com/signPetition/';
  private addPetUrl = 'https://petitions-backend-csumb.herokuapp.com/addPetition/';
  

  constructor(private http: HttpClient) { }

  assignPet(pet) {
    this.supportedPetition = pet;
  }

  newSupport(pet: Pet, email) {
    console.log(pet);
    //var tempArr = [];
    //tempArr['title'] = "Hi";
    //tempArr['description'] = "AHOY";
    console.log(pet['_id']['$oid']);
    return this.http.get(this.signPetUrl + email + "/" + pet['_id']['$oid']);
  }

  newPetition(email, title, description) {
    console.log("Email: " + email);
    console.log("Title: " + title);
    console.log("Description: " + description);
    return this.http.get(this.addPetUrl + email + "/" + title + "/" + description);
  }
  

}

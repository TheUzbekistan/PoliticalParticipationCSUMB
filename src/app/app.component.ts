import { Component } from '@angular/core';
import { Pet } from './pet';
import { GetsetpetService } from './getsetpet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Otter Petitions';

  constructor() { }

  ngOnInit() {
  }

}

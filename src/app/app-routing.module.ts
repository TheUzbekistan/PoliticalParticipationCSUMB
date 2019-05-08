import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetitionComponent} from './petition/petition.component';
import {PetitionFormComponent} from './petition-form/petition-form.component';
const routes: Routes = [
  { path: 'pet', component: PetitionComponent },
  { path: 'form', component: PetitionFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

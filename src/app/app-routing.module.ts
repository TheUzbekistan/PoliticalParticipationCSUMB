import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetitionFormComponent } from './petition-form/petition-form.component';

const routes: Routes = [
  {
    path: 'form',
    component: PetitionFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListingPage } from './student-listing.page';

const routes: Routes = [
  {
    path: '',
    component: StudentListingPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}

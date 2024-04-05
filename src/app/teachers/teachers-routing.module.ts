import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersPage } from './teachers.page';

const routes: Routes = [
  {
    path: '',
    component: TeachersPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}

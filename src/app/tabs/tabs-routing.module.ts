import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'student-listing',
        loadChildren: () => import('../student-listing/student-listing.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'teacher-listing',
        loadChildren: () => import('../teachers/teachers.module').then(m => m.Tab2PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/student-listing',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/student-listing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

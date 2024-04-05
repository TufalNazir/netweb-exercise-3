import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeachersPage } from './teachers.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './teachers-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [TeachersPage]
})
export class Tab2PageModule {}

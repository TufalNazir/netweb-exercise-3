import {IonicModule} from '@ionic/angular';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {StudentListingPage} from './student-listing.page';

import {Tab1PageRoutingModule} from './student-listing-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
  ],
  declarations: [StudentListingPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1PageModule {}

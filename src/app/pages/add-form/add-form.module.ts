import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFormPageRoutingModule } from './add-form-routing.module';

import { AddFormPage } from './add-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFormPageRoutingModule
  ],
  declarations: [AddFormPage]
})
export class AddFormPageModule {}

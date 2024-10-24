import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { WeatherpagePageRoutingModule } from './weatherpage-routing.module';

import { WeatherpagePage } from './weatherpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherpagePageRoutingModule,
    HttpClientModule
  ],
  declarations: [WeatherpagePage]
})
export class WeatherpagePageModule {}

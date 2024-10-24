import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountrypagePageRoutingModule } from './countrypage-routing.module';

import { CountrypagePage } from './countrypage.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountrypagePageRoutingModule,
    HttpClientModule
  ],
  declarations: [CountrypagePage]
})
export class CountrypagePageModule {}

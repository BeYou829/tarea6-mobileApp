import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgepagePageRoutingModule } from './agepage-routing.module';

import { AgepagePage } from './agepage.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgepagePageRoutingModule,
    HttpClientModule
  ],
  declarations: [AgepagePage]
})
export class AgepagePageModule {}

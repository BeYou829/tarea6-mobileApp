import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenrepagePageRoutingModule } from './genrepage-routing.module';

import { GenrepagePage } from './genrepage.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenrepagePageRoutingModule,
    HttpClientModule
  ],
  declarations: [GenrepagePage]
})
export class GenrepagePageModule {}

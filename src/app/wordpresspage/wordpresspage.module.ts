import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordpresspagePageRoutingModule } from './wordpresspage-routing.module';

import { WordpresspagePage } from './wordpresspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordpresspagePageRoutingModule
  ],
  declarations: [WordpresspagePage]
})
export class WordpresspagePageModule {}

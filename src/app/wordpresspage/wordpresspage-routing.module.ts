import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordpresspagePage } from './wordpresspage.page';

const routes: Routes = [
  {
    path: '',
    component: WordpresspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordpresspagePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherpagePage } from './weatherpage.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherpagePageRoutingModule {}

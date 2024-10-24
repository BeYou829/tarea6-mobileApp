import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountrypagePage } from './countrypage.page';

const routes: Routes = [
  {
    path: '',
    component: CountrypagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountrypagePageRoutingModule {}

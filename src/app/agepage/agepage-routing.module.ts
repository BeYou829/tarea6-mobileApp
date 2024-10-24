import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgepagePage } from './agepage.page';

const routes: Routes = [
  {
    path: '',
    component: AgepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgepagePageRoutingModule {}

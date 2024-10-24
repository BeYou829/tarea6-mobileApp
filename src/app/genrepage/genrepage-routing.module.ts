import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenrepagePage } from './genrepage.page';

const routes: Routes = [
  {
    path: '',
    component: GenrepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenrepagePageRoutingModule {}

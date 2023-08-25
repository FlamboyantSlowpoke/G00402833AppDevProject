import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnakeGuidePage } from './snake-guide.page';

const routes: Routes = [
  {
    path: '',
    component: SnakeGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnakeGuidePageRoutingModule {}

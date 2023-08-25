import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorGuidePage } from './monitor-guide.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorGuidePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LizardGuidePage } from './lizard-guide.page';

const routes: Routes = [
  {
    path: '',
    component: LizardGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LizardGuidePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReptileSurveyPage } from './reptile-survey.page';

const routes: Routes = [
  {
    path: '',
    component: ReptileSurveyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReptileSurveyPageRoutingModule {}

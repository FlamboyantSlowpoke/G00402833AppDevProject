import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'reptile-survey',
    loadChildren: () => import('./reptile-survey/reptile-survey.module').then( m => m.ReptileSurveyPageModule)
  },
  {
    path: 'snake-guide',
    loadChildren: () => import('./snake-guide/snake-guide.module').then( m => m.SnakeGuidePageModule)
  },
  {
    path: 'lizard-guide',
    loadChildren: () => import('./lizard-guide/lizard-guide.module').then( m => m.LizardGuidePageModule)
  },
  {
    path: 'monitor-guide',
    loadChildren: () => import('./monitor-guide/monitor-guide.module').then( m => m.MonitorGuidePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

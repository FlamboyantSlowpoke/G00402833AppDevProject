import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReptileSurveyPageRoutingModule } from './reptile-survey-routing.module';
import { ReptileSurveyPage } from './reptile-survey.page';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReptileSurveyPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [ReptileSurveyPage]
})
export class ReptileSurveyPageModule {}

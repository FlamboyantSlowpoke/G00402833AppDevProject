import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnakeGuidePageRoutingModule } from './snake-guide-routing.module';

import { SnakeGuidePage } from './snake-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnakeGuidePageRoutingModule
  ],
  declarations: [SnakeGuidePage]
})
export class SnakeGuidePageModule {}

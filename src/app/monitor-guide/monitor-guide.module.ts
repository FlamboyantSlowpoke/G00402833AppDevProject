import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorGuidePageRoutingModule } from './monitor-guide-routing.module';

import { MonitorGuidePage } from './monitor-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitorGuidePageRoutingModule
  ],
  declarations: [MonitorGuidePage]
})
export class MonitorGuidePageModule {}

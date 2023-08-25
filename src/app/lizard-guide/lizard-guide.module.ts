import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LizardGuidePageRoutingModule } from './lizard-guide-routing.module';

import { LizardGuidePage } from './lizard-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LizardGuidePageRoutingModule
  ],
  declarations: [LizardGuidePage]
})
export class LizardGuidePageModule {}

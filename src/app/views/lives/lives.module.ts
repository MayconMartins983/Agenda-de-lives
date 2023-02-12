import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivesRoutingModule } from './lives-routing.module';
import { LivesComponent } from './lives.component';


@NgModule({
  declarations: [
    LivesComponent
  ],
  imports: [
    CommonModule,
    LivesRoutingModule
  ]
})
export class LivesModule { }

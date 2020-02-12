import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducerRoutingModule } from './producer-routing.module';
import { ProducerComponent } from './producer.component';
import { AppMaterialModule } from '../../material/material.module';
@NgModule({
  declarations: [ProducerComponent],
  imports: [
    CommonModule,
    ProducerRoutingModule,
    AppMaterialModule
  ]
})
export class ProducerModule { }

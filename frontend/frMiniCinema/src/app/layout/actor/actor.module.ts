import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorRoutingModule } from './actor-routing.module';
import {ActorComponent} from './actor.component';
import {AppMaterialModule} from '../../material/material.module';
@NgModule({
  declarations: [ActorComponent],
  imports: [
    CommonModule,
    ActorRoutingModule,
    AppMaterialModule
  ]
})
export class ActorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorRoutingModule } from './actor-routing.module';
import {ActorComponent} from './actor.component';
import {AppMaterialModule} from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {   FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddActorComponent } from './dialog/add-actor/add-actor.component';
import { DeleteActorComponent } from './dialog/delete-actor/delete-actor.component';
import { UpdateActorComponent } from './dialog/update-actor/update-actor.component';
@NgModule({
  declarations: [ActorComponent, AddActorComponent, DeleteActorComponent, UpdateActorComponent],
  entryComponents: [AddActorComponent, DeleteActorComponent, UpdateActorComponent ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class ActorModule { }

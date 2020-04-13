import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {AppMaterialModule} from '../material/material.module';
import { HeaderComponent } from './component/header/header.component';
import { SiderComponent } from './component/sider/sider.component';
import {ActorService} from './shared/services/actor.service';
@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SiderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AppMaterialModule
  ],
  providers: [ActorService]
})
export class LayoutModule { }

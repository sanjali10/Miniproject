import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ActorComponent} from './actor.component';
const routes: Routes = [{
  path: '',
  component: ActorComponent
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ActorRoutingModule { }

import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LayoutComponent } from './layout.component';
const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [{
    path: '',
    loadChildren: () => import('./actor/actor.module').then(m => m.ActorModule)
  },
  {
    path: 'producer',
    loadChildren: () => import('./producer/producer.module').then(m => m.ProducerModule)
  }]
}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class LayoutRoutingModule { }

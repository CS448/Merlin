import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { DroneOverviewComponent } from './components/drone-overview/drone-overview.component';
import { DroneDetailComponent } from './components/drone-detail/drone-detail.component';
import { MapViewComponent } from './components/map-view/map-view.component';

const mainroutes : Routes = [
  {path: '', component: DroneOverviewComponent},
  {path: 'DroneDetail', component: DroneDetailComponent},
  {path: 'MapView', component: MapViewComponent},
]

@NgModule({
  imports: [RouterModule.forChild(mainroutes)],
  exports: [ RouterModule ]
})
export class MainContainerRoutingModule { }

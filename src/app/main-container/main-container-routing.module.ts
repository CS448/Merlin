import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { DroneOverviewComponent } from './components/drone-overview/drone-overview.component';
import { DroneDetailComponent } from './components/drone-detail/drone-detail.component';
import { MapViewComponent } from './components/map-view/map-view.component';

const routes : Routes = [
  {path: 'DroneOverview', component: DroneOverviewComponent},
  {path: 'DroneDetail', component: DroneDetailComponent},
  {path: 'MapView', component: MapViewComponent},
]

@NgModule({
  exports: [ RouterModule ]
})
export class MainContainerRoutingModule { }

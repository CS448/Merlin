import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroneOverviewComponent } from './components/drone-overview/drone-overview.component';
import { DroneDetailComponent } from './components/drone-detail/drone-detail.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { MainContainerRoutingModule } from './main-container-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainContainerRoutingModule
  ],
  declarations: [DroneOverviewComponent, DroneDetailComponent, MapViewComponent]
})
export class MainContainerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroneOverviewComponent } from './components/drone-overview/drone-overview.component';
import { DroneDetailComponent } from './components/drone-detail/drone-detail.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { MainContainerRoutingModule } from './main-container-routing.module';
import { DroneService } from '../_services/drone-service/drone-service.service';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { DroneDisplayComponent } from './components/drone-overview/drone-display/drone-display.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MainContainerRoutingModule
  ],
  providers: [DroneService],
  declarations: [DroneOverviewComponent, DroneDetailComponent, MapViewComponent, DroneDisplayComponent]
})
export class MainContainerModule { }

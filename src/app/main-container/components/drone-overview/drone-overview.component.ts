import { Component, OnInit } from '@angular/core';
import { DroneService } from '../../../_services/drone-service/drone-service.service';
import { Drone } from '../../../_models/drone';

@Component({
  selector: 'app-drone-overview',
  templateUrl: './drone-overview.component.html',
  styleUrls: ['./drone-overview.component.scss']
})
export class DroneOverviewComponent implements OnInit {

  drones: Drone [];
  constructor(private droneService: DroneService) { }

  ngOnInit() {

    this.drones = this.droneService.getDrones();

  }

}

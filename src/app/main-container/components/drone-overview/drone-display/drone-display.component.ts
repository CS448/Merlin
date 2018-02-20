import { Component, OnInit, Input } from '@angular/core';
import { Drone } from '../../../../_models/drone';

@Component({
  selector: 'app-drone-display',
  templateUrl: './drone-display.component.html',
  styleUrls: ['./drone-display.component.scss']
})
export class DroneDisplayComponent implements OnInit {

  @Input() drone: Drone;

  constructor() { }

  ngOnInit() {

  }

  calculateBatteryPercent(): number {
    return this.drone.CurrentBatteryLevel/this.drone.MaxBatteryLevel;
  }

}

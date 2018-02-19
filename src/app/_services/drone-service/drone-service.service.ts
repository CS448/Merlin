import { Injectable } from '@angular/core';
import { Drone } from '../../_models/drone';


const drones: Drone[] = [
  {
    DroneId: 1,
    DroneName: 'Drone 1',
    DroneIconId: 1,
    BatteryLevel: 75
  },
  {
    DroneId: 2,
    DroneName: 'Drone 2',
    DroneIconId: 1,
    BatteryLevel: 75
  },
  {
    DroneId: 3,
    DroneName: 'Drone 3',
    DroneIconId: 1,
    BatteryLevel: 75
  }
]

@Injectable()
export class DroneService {

  constructor() { }

  getDrones(): Drone[] {
    return drones;
  }

}

import { Injectable } from '@angular/core';
import { Drone } from '../../_models/drone';


const drones: Drone[] = [
  {
    DroneId: 1,
    DroneName: 'Drone 1',
    Status: 'Flying',
    OperationalTime: 120,
    DroneIconId: 1,
    Altitude: 500,
    CurrentBatteryLevel: 75,
    MaxBatteryLevel: 100,
    DetailCommand: 'ctrl'
  },
  {
    DroneId: 2,
    DroneName: 'Drone 2',
    DroneIconId: 1,
    Status: 'Charging',
    OperationalTime: 0,
    Altitude: 500,
    CurrentBatteryLevel: 75,
    MaxBatteryLevel: 100,
    DetailCommand: 'ctrl'
  },
  {
    DroneId: 3,
    DroneName: 'Drone 3',
    DroneIconId: 1,
    Status: 'Hovering',
    OperationalTime: 500,
    Altitude: 500,
    CurrentBatteryLevel: 75,
    MaxBatteryLevel: 100,
    DetailCommand: 'ctrl'
  }
]

@Injectable()
export class DroneService {

  constructor() { }

  getDrones(): Drone[] {
    return drones;
  }

}

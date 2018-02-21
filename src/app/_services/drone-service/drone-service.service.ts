import { Injectable } from '@angular/core';
import { Drone } from '../../_models/drone';


const drones: Drone[] = [
  {
    DroneId: 1,
    DroneName: 'Drone 1',
    DroneType: 'Camera',
    Status: 'Flying',
    OperationalTime: 120,
    Altitude: 500,
    CurrentBatteryLevel: 75,
    MaxBatteryLevel: 100,
    DetailCommand: 'ctrl',
    DroneImage: 'assets/images/camera_drone.jpg'
  },
  {
    DroneId: 2,
    DroneName: 'Drone 2',
    DroneType: 'Smoke Dectection',
    Status: 'Charging',
    OperationalTime: 0,
    Altitude: 500,
    CurrentBatteryLevel: 75,
    MaxBatteryLevel: 100,
    DetailCommand: 'ctrl',
    DroneImage: 'assets/images/smoke_drone.jpg'
  },
  {
    DroneId: 3,
    DroneName: 'Drone 3',
    DroneType: 'Water Detection',
    Status: 'Hovering',
    OperationalTime: 500,
    Altitude: 500,
    CurrentBatteryLevel: 75,
    MaxBatteryLevel: 100,
    DetailCommand: 'ctrl',
    DroneImage: 'assets/images/water_drone.png'
  },
  {
    DroneId: 4,
    DroneName: 'Drone 4',
    DroneType: 'Camera',
    Status: 'Hovering',
    OperationalTime: 500,
    Altitude: 500,
    CurrentBatteryLevel: 75,
    MaxBatteryLevel: 100,
    DetailCommand: 'ctrl',
    DroneImage: 'assets/images/camera_drone.jpg'
  },
  {
    DroneId: 5,
    DroneName: 'Drone 5',
    DroneType: 'Smoke Dectection',
    Status: 'Charging',
    OperationalTime: 500,
    Altitude: 500,
    CurrentBatteryLevel: 75,
    MaxBatteryLevel: 100,
    DetailCommand: 'ctrl',
    DroneImage: 'assets/images/smoke_drone.jpg'
  },
  {
    DroneId: 6,
    DroneName: 'Drone 6',
    DroneType: 'Water Dectection',
    Status: 'Dectecting',
    OperationalTime: 500,
    Altitude: 500,
    CurrentBatteryLevel: 75,
    MaxBatteryLevel: 100,
    DetailCommand: 'ctrl',
    DroneImage: 'assets/images/water_drone.png'
  }
]

@Injectable()
export class DroneService {

  constructor() { }

  getDrones(): Drone[] {
    return drones;
  }

  getDrone(DroneId: number): Drone {
    return drones.find(drone => drone.DroneId == DroneId);
  }

}

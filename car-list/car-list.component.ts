import { Component, OnInit } from '@angular/core';
// import { MapComponent, CARS, Car, User } from '../map/map.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  latDist = 0.0;
  lngDist = 0.0;

  // user = new User();
  // carList = CARS;
  // car: Car;
  constructor() { }

  ngOnInit() {
  //   this.car = this.carList[0];
  //   for (let i = 0; i < this.carList.length; i++) {
  //     if (this.calculateDist(this.user.latUser, this.user.lngUser, this.car.lat, this.car.lng) >
  //      this.calculateDist(this.user.latUser, this.user.lngUser, this.carList[i].lat, this.carList[i].lng)) {
  //       this.car = this.carList[i];
  //     }
  //   }
  // NAMES.push(car);
  }

  calculateDist( lat1, lng1, lat2, lng2): number {

    this.latDist = lat2 - lat1;
    this.lngDist = lng2 - lng1;
    return Math.sqrt(Math.pow(this.latDist, 2 ) + Math.pow(this.lngDist, 2 ));

  }

}

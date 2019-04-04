import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {



  latMap = -37.80676;
  lngMap = 144.964830;

  latUser = this.latMap;
  lngUser = this.lngMap;


  latFiesta = -37.807563;
  lngFiesta = 144.962911;

  latSwift = -37.796781;
  lngSwift = 144.965483;

  latGolf = -37.800444;
  lngGolf = 144.968816;

  latPolo = -37.805519;
  lngPolo = 144.961574;

  latGTR = -37.815474;
  lngGTR = 144.960907;

  constructor() {
    // if (navigator)
    // {
    // navigator.geolocation.getCurrentPosition( pos => {
    //     this.lngUser = +pos.coords.longitude;
    //     this.latUser = +pos.coords.latitude;
    //   });
    // }
   }

  ngOnInit() {
  }


}

export class User {
  latUser = -37.80676;
  lngUser = 144.964830;
}

export class Car {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

export const CARS: Car[] = [
  {
    id: 'c1',
    name: 'Fiesta',
    lat: -37.807563,
    lng: 144.962911
  },
  {
    id: 'c2',
    name: 'Swift',
    lat: -37.796781,
    lng: 144.965483
  },
  {
    id: 'c3',
    name: 'Golf',
    lat: -37.800444,
    lng: 144.968816
  },
  {
    id: 'c4',
    name: 'Polo',
    lat: -37.805519,
    lng: 144.961574
  },
  {
    id: 'c5',
    name: 'GTR',
    lat: -37.815474,
    lng: 144.960907
  }
];




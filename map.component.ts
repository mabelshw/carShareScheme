import { Component, OnInit, EventEmitter } from '@angular/core';
import { AgmMarker } from '@agm/core';
import { CarListComponent } from '../car-list/car-list.component';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  cars = CARS;

  latMap = -37.80676;
  lngMap = 144.964830;

  latUser = this.latMap;
  lngUser = this.lngMap;


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

  showInfo(e: AgmMarker) {
    console.log(e.label);
  }

  book(e) {
    console.log(e.target.dataset.id);
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
  imgUrl: string;
}

export const CARS: Car[] = [
  {
    id: 'c1',
    name: 'Fiesta',
    lat: -37.807563,
    lng: 144.962911,
    imgUrl: 'https://website.didiglobal.com/dist/img/model-express.c8f41bab.png'
  },
  {
    id: 'c2',
    name: 'Swift',
    lat: -37.796781,
    lng: 144.965483,
    imgUrl: 'https://website.didiglobal.com/dist/img/model-express.c8f41bab.png'
  },
  {
    id: 'c3',
    name: 'Golf',
    lat: -37.800444,
    lng: 144.968816,
    imgUrl: 'https://website.didiglobal.com/dist/img/model-express.c8f41bab.png'
  },
  {
    id: 'c4',
    name: 'Polo',
    lat: -37.805519,
    lng: 144.961574,
    imgUrl: 'https://website.didiglobal.com/dist/img/model-express.c8f41bab.png'
  },
  {
    id: 'c5',
    name: 'GTR',
    lat: -37.815474,
    lng: 144.960907,
    imgUrl: 'https://website.didiglobal.com/dist/img/model-express.c8f41bab.png'
  }
];

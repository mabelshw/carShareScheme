import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import { CARS } from '../mock-cars';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars = CARS;
  selectedCar: Car;

  constructor() { }

  ngOnInit() {
  }

  
  onSelect(car: Car): void{
    this.selectedCar = car;
  }
}

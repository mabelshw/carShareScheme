import { Component, OnInit } from '@angular/core';

import { CarMapComponent } from '../car-map/car-map.component';
import { CarListComponent } from '../car-list/car-list.component';
import { CarListItemComponent } from '../car-list-item/car-list-item.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

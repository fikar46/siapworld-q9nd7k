import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-world',
  templateUrl: './map-world.page.html',
  styleUrls: ['./map-world.page.scss'],
})
export class MapWorldPage implements OnInit {
  public cityName : String;
  constructor() { }

  ngOnInit() {
    var location = window.location.pathname.split('/')[1];
    this.cityName = location.toUpperCase();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-auditorium',
  templateUrl: './map-auditorium.page.html',
  styleUrls: ['./map-auditorium.page.scss'],
})
export class MapAuditoriumPage implements OnInit {
  public roomName : String;
  constructor() { }

  ngOnInit() {
    var location = window.location.pathname.split('/')[2];
    this.roomName = location.toUpperCase();
  }

}

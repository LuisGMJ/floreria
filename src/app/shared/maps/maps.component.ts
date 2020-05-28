import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  mapLink = 'https://www.google.com/maps/d/embed?mid=1Yh6rAPUJmKrBfCUpfTuJkSwAueIFttTJ';
  constructor() { }

  ngOnInit(): void {
  }

}

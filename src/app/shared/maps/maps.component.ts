import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  mapLink = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14869.37412491994!2d-100.5167596!3d21.297438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x64e1174b377d20a4!2sFlorer%C3%ADa%20La%20Plazuela!5e0!3m2!1ses-419!2smx!4v1589218364852!5m2!1ses-419!2smx';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;

  reasons = [
    'Aniversario', 'Boda', 'Cumpleaños', 'Funerarios', 'Día de las madres'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

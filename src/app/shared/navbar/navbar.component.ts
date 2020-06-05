import { Component, OnInit } from '@angular/core';
import { GeneralDataService } from '../../services/general-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pagetitle = '';
  logo = '';

  isCollapsed = true;

  reasons = [
    'Aniversario', 'Boda', 'Cumpleaños', 'Funerarios', 'Día de las madres'
  ];

  constructor(private dataService: GeneralDataService) { }

  ngOnInit(): void {
    if (localStorage.getItem('generalData')) {
      this.pagetitle = this.dataService.readLocalData()['pagetitle'];
    } else {
      this.getGeneralData();
    }
  }

  getGeneralData() {
    this.dataService.getDataFromDb().subscribe(data => {
      this.pagetitle = data['pagetitle'];
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { GeneralDataService } from '../../services/general-data.service';
import { GeneralData } from '../../models/general-data.model';
import { ProductsDataService } from '../../services/products-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;
  reasonsIsCollapsed = true;

  data: GeneralData;

  reasons = [
    'Aniversario', 'Boda', 'Cumpleaños', 'Funerarios', 'Día de las madres'
  ];

  constructor(private dataService: GeneralDataService,
              private productsService: ProductsDataService) { }

  ngOnInit(): void {
    this.productsService.getProductTypeList().subscribe(list => this.reasons = list.type);
    if (localStorage.getItem('generalData')) {
      this.data = this.dataService.readLocalData();
    } else {
      this.getGeneralData();
    }
  }

  getGeneralData() {
    this.dataService.getDataFromDb().subscribe(data => {
      this.data = data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { GeneralDataService } from '../../services/general-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titleflipbook = 'Arreglos destacados';

  constructor(private dataService: GeneralDataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe();
  }

}

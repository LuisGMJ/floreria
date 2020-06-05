import { Component, OnInit } from '@angular/core';
import { GeneralDataService } from '../../services/general-data.service';
import { CarouselDataService } from '../../services/carousel-data.service';
import { ProductsDataService } from '../../services/products-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titleflipbook = 'Arreglos destacados';

  carouselData = {};
  productsData: any;

  constructor(private carouselService: CarouselDataService, private productsService: ProductsDataService) { }

  ngOnInit(): void {
    this.carouselService.getCarouselData().subscribe(data => this.carouselData = data);
    this.productsService.getProductsData().subscribe(data => this.productsData = data);
  }

}

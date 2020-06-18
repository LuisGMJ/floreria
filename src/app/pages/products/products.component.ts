import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../../services/products-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsData;

  constructor(private productsService: ProductsDataService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productsService.getProductsByType(params.id).subscribe(products => this.productsData = products);
    });
  }

}

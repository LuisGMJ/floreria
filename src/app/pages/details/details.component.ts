import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../../services/products-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: any;

  constructor(private productsService: ProductsDataService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.productsService.getProduct(params.id).subscribe(product => {
        this.product = product;
      });
    });
  }

}

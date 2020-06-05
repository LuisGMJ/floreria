import { Component, OnInit, Input } from '@angular/core';
import { ProductsDataService } from '../../services/products-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  linkImage = 'https://media.interflora.es/catalog/product/cache/1/image/726x/9df78eab33525d08d6e5fb8d27136e95/p/0/p0100.jpg';
  product: any;
 
  constructor(private productsService: ProductsDataService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.productsService.getProduct(params.id).subscribe(product => {
        console.log(product)
        this.product = product;
      });
    });
  }

}

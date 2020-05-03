import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products/products.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private productsService: ProductsService ) { }

  ngOnInit(): void {
  }
  allProducts() {
    this.productsService.getProducts()
    .subscribe(
      res => console.log('products', res)
    )
  }
}

import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products/products.service'

@Component({
  selector: 'app-lunch-dinner',
  templateUrl: './lunch-dinner.component.html',
  styleUrls: ['./lunch-dinner.component.css']
})
export class LunchDinnerComponent implements OnInit {

  products =[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts()
    .subscribe(
      res => {
        const menuFilter = res.filter(product => product.type !== 'desayuno')
        this.products= menuFilter;
        console.log('productsFilter', menuFilter)
      }
    )
  }

}

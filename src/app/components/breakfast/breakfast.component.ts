import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products/products.service'

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  products =[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts()
    .subscribe(
      res => {
        const menuFilter = res.filter(product => product.type === 'desayuno')
        this.products= menuFilter;
        console.log('productsFilter', menuFilter)
      }
    )
  }

}

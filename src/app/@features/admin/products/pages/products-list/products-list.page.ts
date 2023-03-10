import { Component } from '@angular/core';
import { ProductsService } from 'src/app/@shared/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss']
})
export class ProductsListPage {

  constructor(private productsService: ProductsService){
    this.getProducts()
  }

  getProducts(){
    this.productsService.getAll().subscribe({
      next: (rsp) => console.log(rsp)
    })
  }

}

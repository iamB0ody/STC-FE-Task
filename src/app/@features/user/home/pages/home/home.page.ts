import { Component } from '@angular/core';
import { Filters } from 'src/app/@shared/interfaces/filters/filters.interface';
import { Product } from 'src/app/@shared/interfaces/product/product.interface';
import { ProductsService } from 'src/app/@shared/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAll().subscribe({
      next: (rsp) => {
        this.products = rsp;
      },
    });
  }
}

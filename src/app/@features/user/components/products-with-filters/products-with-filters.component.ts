import { Component, Input } from '@angular/core';
import { Filters } from 'src/app/@shared/interfaces/filters/filters.interface';
import { Product } from 'src/app/@shared/interfaces/product/product.interface';

@Component({
  selector: 'app-products-with-filters',
  templateUrl: './products-with-filters.component.html',
  styleUrls: ['./products-with-filters.component.scss'],
})
export class ProductsWithFiltersComponent {
  @Input() set products(products: Product[]){
    this.productsList = products;
    this._products = products;
  };
  productsList: Product[] = [];
  _products: Product[] = [];


  filter(filters: Filters) {
    this._products = this.productsList;
    if (filters.categories && filters.categories.length) {
      this._products = this._products.filter((product: Product) =>
        filters.categories?.includes(product.category)
      );
    }
    if (filters.rates && filters.rates.length) {
      this._products = this._products.filter((product: Product) =>
        filters.rates?.includes(product.rating.rate)
      );
    }
    if (filters.minPrice) {
      this._products = this._products.filter(
        (product: Product) => product.price >= filters.minPrice
      );
    }
    if (filters.maxPrice) {
      this._products = this._products.filter(
        (product: Product) => product.price <= filters.maxPrice
      );
    }
  }
}

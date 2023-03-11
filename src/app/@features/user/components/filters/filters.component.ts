import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Filters } from 'src/app/@shared/interfaces/filters/filters.interface';
import { Product } from 'src/app/@shared/interfaces/product/product.interface';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Input() set products(products: Product[]) {
    this.setFilters(products);
  }
  @Output() onFilter: EventEmitter<Filters> = new EventEmitter<Filters>()

  filters: Filters = {
    categories: [],
    rates: [],
    minPrice: 0,
    maxPrice: 0
  };

  categories: string[] = [];
  prices: number[] = [];
  rates: number[] = [];

  selectedCategories: string[] = [];
  selectedRates: string[] = [];
  selectedRage: string[] = [];
  priceMin: number = 0;
  priceMax: number = 0;

  setFilters(products: Product[]) {
    if (products.length) {
      products.map((p) => {
        // Categories
        this.categories.push(p.category);
        this.categories = [...new Set(this.categories)];

        // Prices
        this.prices.push(p.price);
        this.prices = [...new Set(this.prices)];
        this.priceMin = Math.min(...this.prices);
        this.priceMax = Math.max(...this.prices);

        // Rates
        this.rates.push(p.rating.rate);
        this.rates = [...new Set(this.rates)].sort();
      });
    }
  }

  selectCategory(event: MatSelectChange) {
    this.filters['categories'] = event.value;
    this.filter()
  }

  selectRate(event: MatSelectChange) {
    this.filters['rates'] = event.value;
    this.filter()
  }

  selectRangeFrom(event: any) {
    this.filters['minPrice'] = event.target.value;
    this.filter()
  }

  selectRangeTo(event: any) {
    this.filters['maxPrice'] = event.target.value;
    this.filter()
  }

  filter(){
    this.onFilter.emit(this.filters)
  }
}

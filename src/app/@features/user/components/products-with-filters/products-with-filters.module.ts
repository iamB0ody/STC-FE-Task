import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { ProductsWithFiltersComponent } from './products-with-filters.component';
import { FiltersModule } from '../filters/filters.module';
import { ProductCardModule } from '../product-card/product-card.module';

@NgModule({
  declarations: [ProductsWithFiltersComponent],
  imports: [SharedModule, ProductCardModule, FiltersModule],
  exports: [ProductsWithFiltersComponent],
})
export class ProductsWithFiltersModule {}

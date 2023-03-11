import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryProductsPage } from './pages/category-products/category-products.page';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { ProductsWithFiltersModule } from '../components/products-with-filters/products-with-filters.module';

@NgModule({
  declarations: [CategoryProductsPage],
  imports: [
    SharedModule,
    CategoryRoutingModule,
    ProductsWithFiltersModule
  ],
})
export class CategoryModule {}

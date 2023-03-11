import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryProductsPage } from './pages/category-products/category-products.page';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { ProductCardModule } from 'src/app/@shared/components/product-card/product-card.module';

@NgModule({
  declarations: [CategoryProductsPage],
  imports: [SharedModule, CategoryRoutingModule, ProductCardModule],
})
export class CategoryModule {}

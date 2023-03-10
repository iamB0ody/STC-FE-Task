import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { ProductPage } from './pages/product/product.page';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [ProductPage],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { HomePage } from './pages/home/home.page';
import { HomeRoutingModule } from './home-routing.module';
import { ProductsWithFiltersModule } from '../components/products-with-filters/products-with-filters.module';



@NgModule({
  declarations: [HomePage],
  imports: [
    SharedModule,
    HomeRoutingModule,
    ProductsWithFiltersModule
  ]
})
export class HomeModule { }

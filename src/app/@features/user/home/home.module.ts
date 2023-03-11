import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { HomePage } from './pages/home/home.page';
import { HomeRoutingModule } from './home-routing.module';
import { ProductCardModule } from 'src/app/@shared/components/product-card/product-card.module';



@NgModule({
  declarations: [HomePage],
  imports: [
    SharedModule,
    HomeRoutingModule,
    ProductCardModule
  ]
})
export class HomeModule { }

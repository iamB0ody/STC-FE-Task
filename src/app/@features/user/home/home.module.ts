import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { HomePage } from './pages/home/home.page';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomePage, ProductCardComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

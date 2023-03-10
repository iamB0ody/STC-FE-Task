import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from 'src/app/@core/layout/admin-layout/admin-layout.component';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [AdminRoutingModule]
})
export class AdminModule { }

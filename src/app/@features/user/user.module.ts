import { NgModule } from '@angular/core';
import { UserLayoutComponent } from 'src/app/@core/layout/user-layout/user-layout.component';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserLayoutComponent],
  imports: [SharedModule, UserRoutingModule],
})
export class UserModule {}

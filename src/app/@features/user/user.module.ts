import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, UserRoutingModule],
})
export class UserModule {}

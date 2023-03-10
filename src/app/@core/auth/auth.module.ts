import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { AuthLayoutComponent } from '../layout/auth-layout/auth-layout.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './pages/login/login.page';



@NgModule({
  declarations: [AuthLayoutComponent, LoginPage],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

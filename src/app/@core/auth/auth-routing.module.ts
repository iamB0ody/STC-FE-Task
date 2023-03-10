import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from 'src/app/@core/layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '../layout/auth-layout/auth-layout.component';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'prefix',
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPage
      },

    ],
  },
  {
    path: '**',
    redirectTo: 'user/login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

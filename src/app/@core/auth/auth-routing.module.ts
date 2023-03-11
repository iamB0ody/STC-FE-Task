import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from '../layout/auth-layout/auth-layout.component';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: LoginPage,
      }
    ],
  },
  // {
  //   path: '',
  //   component: AuthLayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'user',
  //       pathMatch: 'full',
  //     },
  //     {
  //       path: 'user',
  //       component: LoginPage,
  //     },
  //     {
  //       path: 'admin',
  //       component: LoginPage,
  //     },
  //   ],
  // },
  {
    path: '**',
    redirectTo: 'user',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

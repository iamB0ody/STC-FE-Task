import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from 'src/app/@core/layout/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'prefix',
  },
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: 'home',
          loadChildren: () =>
            import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'category',
          loadChildren: () =>
            import('./category/category.module').then((m) => m.CategoryModule),
      },
      {
        path: 'product',
          loadChildren: () =>
            import('./product/product.module').then((m) => m.ProductModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

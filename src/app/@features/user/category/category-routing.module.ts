import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from 'src/app/@core/layout/user-layout/user-layout.component';
import { CategoryProductsPage } from './pages/category-products/category-products.page';

const routes: Routes = [
  {
    path: ':categoryName',
    component: CategoryProductsPage
  },
  {
    path: '',
    component: CategoryProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/@shared/interfaces/product/product.interface';
import { CategoriesService } from 'src/app/@shared/services/categories/categories.service';
import { getCategoriesAction } from 'src/app/@store/actions/categories.actions';
import { getProductsAction } from 'src/app/@store/actions/products.actions';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss'],
})
export class UserLayoutComponent {
  categories: string[] = [];

  categoriesObservable$!: Observable<string[]>;
  categoriesObservableSubscription$!: Subscription;

  constructor(
    private store: Store<{ categories: string[]; products: Product[] }>
  ) {
    this.categoriesObservable$ = this.store.select('categories');
  }

  ngOnInit(): void {
    this.store.dispatch(getProductsAction());
    this.store.dispatch(getCategoriesAction());
    this.getCategories()
  }

  getCategories() {
    this.categoriesObservableSubscription$ =
      this.categoriesObservable$.subscribe({
        next: (rsp: string[]) => {
          this.categories = rsp;
        },
      });
  }
}

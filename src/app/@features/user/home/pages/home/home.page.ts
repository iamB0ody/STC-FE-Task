import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/@shared/interfaces/product/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  products: Product[] = [];
  loading: boolean = false;

  productsObservable$!: Observable<Product[]>;
  productsObservableSubscription$!: Subscription;

  constructor(
    private store: Store<{ products: Product[] }>
  ) {
    this.productsObservable$ = this.store.select('products');
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.productsObservableSubscription$ = this.productsObservable$.subscribe({
      next: (rsp: Product[]) => {
        this.products = rsp;
        this.loading = false;
      }
    });
  }
}

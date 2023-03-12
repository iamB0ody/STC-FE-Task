import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/@shared/interfaces/product/product.interface';
import { getProductsAction } from 'src/app/@store/actions/products.actions';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  constructor(
    private store: Store<{ products: Product[] }>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getProductsAction())
  }
}

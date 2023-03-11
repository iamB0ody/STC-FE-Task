import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/@shared/interfaces/product/product.interface';
import { ProductsService } from 'src/app/@shared/services/products/products.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.page.html',
  styleUrls: ['./category-products.page.scss'],
})
export class CategoryProductsPage {
  categoryName!: string;
  products: Product[] = [];
  loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {
    this.handleRouter();
  }

  handleRouter() {
    this.activatedRoute.params.subscribe((p) => {
      if (p['categoryName']) {
        this.categoryName = p['categoryName'];
        this.getProductsByCategory(this.categoryName);
      } else {
        this.router.navigate(['']);
      }
    });
  }

  getProductsByCategory(categoryName: string) {
    this.loading = true;
    this.productsService.getAll(`category/${categoryName}`).subscribe({
      next: (rsp) => {
        this.products = rsp;
        this.loading = false;
      },
    });
  }
}

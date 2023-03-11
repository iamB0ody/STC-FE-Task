import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/@core/services/language/language.service';
import { enterAnimation } from 'src/app/@shared/animations/enter.animation';
import { rowsAnimation } from 'src/app/@shared/animations/row.animation';
import { Product } from 'src/app/@shared/interfaces/product/product.interface';
import { ProductsService } from 'src/app/@shared/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
  animations: [rowsAnimation, enterAnimation],
})
export class ProductsListPage {
  displayedColumns: string[] = [
    'id',
    'image',
    'title',
    'price',
    'category',
    'description',
    'rating',
    'operations',
  ];
  dataSource = new MatTableDataSource<Product>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private snackBar: MatSnackBar,
    private languageService: LanguageService
  ) {
    this.getProducts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getProducts() {
    this.productsService.getAll().subscribe({
      next: (rsp: Product[]) => {
        this.dataSource.data = rsp;
      },
    });
  }

  new() {
    this.router.navigate(['admin/products/add']);
  }

  edit(id: number) {
    this.router.navigate(['admin/products/edit', id]);
  }

  delete(id: number) {
    this.dataSource.data = this.dataSource.data.filter((p) => p.id !== id);
    this.productsService.deleteOne('', id).subscribe({
      next: (rsp) => {
        this.snackBar.open(this.languageService.trans('messages.successLogin'));
      },
    });
  }
}

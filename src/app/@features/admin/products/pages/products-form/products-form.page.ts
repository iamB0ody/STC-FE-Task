import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from 'src/app/@core/services/language/language.service';
import { ProductsService } from 'src/app/@shared/services/products/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.page.html',
  styleUrls: ['./products-form.page.scss'],
})
export class ProductsFormPage {
  productForm: FormGroup = new FormGroup({});
  productId!: number;

  constructor(
    private productsService: ProductsService,
    private snackBar: MatSnackBar,
    private router: Router,
    private languageService: LanguageService,
    private activatedRoute: ActivatedRoute
  ) {
    this.initForm();
    this.handleRouter();
  }

  initForm() {
    this.productForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      price: new FormControl(null, [Validators.required, Validators.min(1)]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
        ),
      ]),
      category: new FormControl('', [Validators.required]),
    });
  }

  handleRouter() {
    this.activatedRoute.params.subscribe((p) => {
      if (p['productId']) {
        this.productId = +p['productId'];
        this.getProduct(this.productId);
      }
    });
  }

  getProduct(id: number) {
    this.productsService.getOne(id).subscribe({
      next: (rsp) => {
        this.productForm.patchValue(rsp);
      },
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const request = this.productId
        ? this.productsService.updateOne(
            '',
            this.productForm.value,
            this.productId
          )
        : this.productsService.addOne('', this.productForm.value);

      request.subscribe({
        next: (rsp) => {
          this.snackBar.open(
            this.languageService.trans(
              this.productId
                ? 'messages.productupdatedsuccessfuly'
                : 'messages.productcreatedsuccessfully'
            )
          );
          this.router.navigate(['admin/products']);
        },
      });
    }
  }
}

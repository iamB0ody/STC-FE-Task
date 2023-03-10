import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFormPage } from './products-form.page';

describe('ProductsFormPage', () => {
  let component: ProductsFormPage;
  let fixture: ComponentFixture<ProductsFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsFormPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

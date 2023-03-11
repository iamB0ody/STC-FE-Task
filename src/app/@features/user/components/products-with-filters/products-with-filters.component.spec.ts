import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithFiltersComponent } from './products-with-filters.component';

describe('ProductsWithFiltersComponent', () => {
  let component: ProductsWithFiltersComponent;
  let fixture: ComponentFixture<ProductsWithFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsWithFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsWithFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/@shared/services/categories/categories.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss'],
})
export class UserLayoutComponent {
  categories: string[] = []

  constructor(private categoriesService: CategoriesService) {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getAll().subscribe({
      next: (rsp) => {
        this.categories = rsp;
      },
    });
  }
}

import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/@core/services/api/api.service';
import { CrudService } from 'src/app/@core/services/crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends CrudService {
  readonly apiUrl: string = `/products/categories`;

  constructor(apiService: ApiService) {
    super(apiService);
  }
}

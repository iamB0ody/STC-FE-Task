import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/@core/services/api/api.service';
import { CrudService } from 'src/app/@core/services/crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends CrudService {
  readonly apiUrl: string = `/products`;

  constructor(apiService: ApiService) {
    super(apiService);
  }
}

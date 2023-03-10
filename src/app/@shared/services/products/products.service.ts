import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/@core/services/api/api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly apiUrl: string = `/products`;

  constructor(apiService: ApiService) {}
}

import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/@core/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  readonly apiUrl: string = `/categoris`;

  constructor(apiService: ApiService) {}
}

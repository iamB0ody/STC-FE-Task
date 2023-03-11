import { Injectable } from '@angular/core';
// import { objectToQuery } from 'src/app/@shared/helpers/helper';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export abstract class CrudService {
  abstract apiUrl: string;

  constructor(protected apiService: ApiService) {}

  getAll(
    url?: string,
    pagination?: { page: number; pageSize: number },
    filters?: {
      sort?: string;
      query?: string;
      group?: number;
      client?: string;
      system_id?: any;
      event_type?: string;
      status?: string;
      current_status?: string;
      country?: number;
      filters?: any;
    }
  ) {
    // ?${pagination ? objectToQuery(pagination) : ''}&${filters ? objectToQuery(filters) : ''}
    return this.apiService.get(
      `${this.apiUrl}${url ? '/' + url : ''}
      `
    );
  }

  getOne(id: number | string, url?: string) {
    return this.apiService.get(`${this.apiUrl}${url ? '/' + url : ''}/${id}`);
  }

  addOne(url: string, data: any) {
    return this.apiService.post(`${this.apiUrl}${url ? '/' + url : ''}`, data);
  }

  updateOne(url: string, data: any, id: number) {
    return this.apiService.put(
      `${this.apiUrl}${url ? '/' + url : ''}/${id}`,
      data
    );
  }

  patchOne(url: string, data: any, id: number) {
    return this.apiService.patch(
      `${this.apiUrl}${url ? '/' + url : ''}/${id}`,
      data
    );
  }

  deleteOne(url: string, id: number, all?: any[]) {
    return this.apiService.delete(
      `${this.apiUrl}${url ? '/' + url : ''}/${id}`
    );
  }
}

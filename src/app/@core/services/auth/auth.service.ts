import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from 'src/app/@shared/interfaces/login-req/login-req.interface';
import { LoginResponse } from 'src/app/@shared/interfaces/login-res/login-res.interface';
import { ApiService } from '../api/api.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly apiUrl: string = `/auth/login`;

  constructor(private apiService: ApiService, private storageService: StorageService) { }

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.apiService.post(this.apiUrl, data)
  }

  isLoggedIn() : boolean{
    return this.storageService.get('token') ? true : false
  }

  isAdmin() : boolean{
    return this.storageService.get('role') === 'admin' ? true : false
  }

  isUser() : boolean{
    return this.storageService.get('role') === 'user' ? true : false
  }
}

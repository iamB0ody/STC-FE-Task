import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError, tap } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true,
    });
    const token = localStorage.getItem('token');
    // if (this.userService.isLoggedIn) {
    //   req = req.clone({
    //     headers: req.headers.set('Authorization', 'Bearer ' + token),
    //   });
    // }

    return next.handle(req).pipe(
      tap((res) => {
        if (res instanceof HttpResponse) {
          // this.toastr.success(res.body.message);
        }
      }),
      catchError((err) => {
        if (err.status === 401) {
          // this.router.navigate(['']);
          //Generate params for token refreshing
          // const params = {
          // 	token,
          // 	refreshToken: localStorage.getItem('refreshToken'),
          // }
          // return this.apiService.post('refreshTokenUrl', params).pipe(
          // 	mergeMap((data: any) => {
          // 		//If reload successful update tokens
          // 		if (data.status == 200) {
          // 			//Update tokens
          // 			localStorage.setItem('Authorization', data.result.token)
          // 			localStorage.setItem('refreshToken', data.result.refreshToken)
          // 			//Clone our field request ant try to resend it
          // 			req = req.clone({
          // 				setHeaders: {
          // 					Authorization: data.result.token,
          // 				},
          // 			})
          // 			return next.handle(req).pipe(catchError((err) => throwError(() => err)))
          // 		} else {
          // 			//Logout from account
          // 			return EMPTY
          // 		}
          // 	}),
          // )
        }
        if (err.status === 500) {
          // this.toastService.add({
          //   severity: 'error',
          //   summary: 'Error',
          //   detail: err.error.message || err.error.data,
          // });
        }
        if (err.status === 400) {
          // this.toastService.add({
          //   severity: 'error',
          //   summary: 'Error',
          //   detail: err.error.message || err.error.data,
          // });
        }
        if (err.status === 422) {
          // this.toastService.add({
          //   severity: 'error',
          //   summary: 'Error',
          //   detail: err.error.message || err.error.data,
          // });
        }
        return throwError(() => err);
      })
    );
  }
}

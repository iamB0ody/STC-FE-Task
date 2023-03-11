import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError, tap, map } from 'rxjs';
import { LoadingService } from 'src/app/@shared/services/loading/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.on();
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.loadingService.off();
          return event.clone({ body: event.body });
        }
        return event;
      }),
      catchError((error: HttpErrorResponse, caught$) => {
        if (error instanceof HttpErrorResponse){
          this.loadingService.off()
        }
        return throwError(() => error);
      })
    );
  }
}

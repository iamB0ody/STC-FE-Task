import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  get isLoading(): Observable<boolean> {
    return this.isLoading$;
  }

  constructor() {}

  on(): void {
    this.isLoading$.next(true);
  }

  off(): void {
    this.isLoading$.next(false);
  }
}

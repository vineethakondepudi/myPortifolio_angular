import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {
  constructor(private router: Router) {}

  navigateWithDelay(url: string, delayTime: number = 3000): Observable<void> {
    return of(undefined).pipe(
      delay(delayTime),
      switchMap(() => {
        this.router.navigate([url]);
        return of(undefined);
      })
    );
  }
}

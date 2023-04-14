import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { AvailabilityModel } from './availability-model';

@Injectable({
  providedIn: 'root',
})
export class AvailabilityService {
  public readonly availability$: Observable<AvailabilityModel[]> = of(
    document.querySelectorAll('script[type="application/json"].calendar-data')
  ).pipe(
    map(elms => Array.from(elms)
      .map(elm => JSON.parse(elm.textContent || 'undefined') as AvailabilityModel)
      .filter(item => !!item)
    )
  );

  constructor() { }
}

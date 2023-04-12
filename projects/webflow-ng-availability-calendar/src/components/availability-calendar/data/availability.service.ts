import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AvailabilityModel } from './availability-model';

@Injectable({
  providedIn: 'root',
})
export class AvailabilityService {
  public readonly availability$: Observable<AvailabilityModel[]> = of([
    {
      startDate: '2023-04-15 16:51:39',
      endDate: '2023-04-28 14:47:11',
    },
    {
      startDate: '2023-05-31 16:51:39',
      endDate: '2023-06-10 14:47:11',
    },
    {
      startDate: '2023-06-25 19:41:08',
      endDate: '2023-06-30 14:47:11',
    },
    {
      startDate: '2023-08-04 10:00:34',
      endDate: '2023-08-18 14:47:11',
    },
    // {
    //   startDate: '2023-09-27 14:47:11',
    //   endDate: '2023-09-30 14:47:11',
    // },
    {
      startDate: '2023-09-24 14:47:11',
      endDate: '2023-09-28 14:47:11',
    },
  ] as AvailabilityModel[]);

  constructor() {}
}

/*
2023-09-27 14:47:11
2023-07-29 16:25:57
2023-05-31 16:51:39

2023-10-09 02:41:40
2023-05-23 16:41:00
2023-09-21 10:39:53
2023-10-05 21:14:30
2023-08-19 08:07:29
*/

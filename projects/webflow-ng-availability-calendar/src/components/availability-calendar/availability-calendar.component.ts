import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {
  DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS,
  MAT_NATIVE_DATE_FORMATS, NativeDateAdapter
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  addMonths,
  endOfDay,
  endOfMonth, Interval, isPast,
  isWithinInterval, startOfDay,
  startOfMonth,
  subDays
} from 'date-fns';
import { map, tap } from 'rxjs';
import { AvailabilityService } from './data/availability.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './availability-calendar.component.html',
  styleUrls: ['./availability-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: DateAdapter,
      useClass: NativeDateAdapter,
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MAT_NATIVE_DATE_FORMATS,
    },
  ],
})
export class AvailabilityCalendarComponent {
  private availabilityRanges: Interval[] = [];
  @Input()
  public months: number = 6;
  @Input()
  public minDaysBefore: number = 1;

  protected readonly availability$ =
    this.availabilityService.availability$.pipe(
      map((data) => {
        return data.map(
          (dr) =>
          ({
            start: startOfDay(new Date(dr.startDate)),
            end: endOfDay(new Date(dr.endDate)),
          } as Interval)
        );
      }),
      tap((dr) => (this.availabilityRanges = dr))
    );

  protected get startCalDate() {
    return startOfMonth(Date.now());
  }

  protected get endCalDate() {
    return addMonths(endOfMonth(Date.now()), this.months);
  }

  protected isDateAvailable(date: Date) {
    console.log(this.minDaysBefore);
    if (isPast(subDays(endOfDay(date), +this.minDaysBefore))) {
      return false;
    }
    if (this.availabilityRanges) {
      for (const range of this.availabilityRanges) {
        if (isWithinInterval(date, range)) {
          return true;
        }
      }
    }
    return false;
  }

  constructor(private readonly availabilityService: AvailabilityService) { }
}

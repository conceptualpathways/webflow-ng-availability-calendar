import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_NATIVE_DATE_FORMATS,
  MatNativeDateModule,
  NativeDateAdapter,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  Interval,
  isWithinInterval,
  parseISO,
  startOfDay,
  endOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
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

  protected readonly availability$ =
    this.availabilityService.availability$.pipe(
      map((data) => {
        return data.map(
          (dr) =>
            ({
              start: startOfDay(parseISO(dr.startDate)),
              end: endOfDay(parseISO(dr.endDate)),
            } as Interval)
        );
      }),
      tap((dr) => (this.availabilityRanges = dr))
    );

  protected startCalDate() {
    return startOfMonth(Date.now());
  }

  protected endCalDate(mm: number) {
    return addMonths(endOfMonth(Date.now()), mm);
  }

  protected isDateAvailable(date: Date) {
    if (this.availabilityRanges) {
      for (const range of this.availabilityRanges) {
        if (isWithinInterval(date, range)) {
          return true;
        }
      }
    }
    console.log('False :: ' + date + '  Range ' + this.availabilityRanges);
    return false;
  }

  constructor(private readonly availabilityService: AvailabilityService) {}
}

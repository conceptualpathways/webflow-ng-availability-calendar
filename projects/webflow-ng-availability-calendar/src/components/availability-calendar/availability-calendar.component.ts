import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  DateAdapter,
  MatNativeDateModule,
  NativeDateAdapter,
  MAT_DATE_FORMATS,
  MAT_NATIVE_DATE_FORMATS,
} from '@angular/material/core';
import {
  DateRange,
  MatDateRangeInput,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { AvailabilityService } from './data/availability.service';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

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
  protected readonly availability$ = this.availabilityService.availability$;
  public selectedDate = '2023-04-16 16:51:39';

  today = new Date();
  month = this.today.getMonth();
  year = this.today.getFullYear();

  start = new Date(this.year, this.month, 13);
  end = new Date(this.year, this.month, 16);
  dateRange = new DateRange(this.start, this.end);

  start2 = new Date(this.year, this.month, 18);
  end2 = new Date(this.year, this.month, 20);
  dateRange2 = new DateRange(this.start2, this.end2);

  constructor(private readonly availabilityService: AvailabilityService) {}

  //calculate this month and set as start to future rolling 6 months

  //calculate the future 6 months

  //get the source data and style those dates as available
}

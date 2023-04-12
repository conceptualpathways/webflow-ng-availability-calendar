import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AvailabilityService } from './data/availability.service';
import { MatNativeDateModule } from '@angular/material/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './availability-calendar.component.html',
  styleUrls: ['./availability-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailabilityCalendarComponent {
  protected readonly availability$ = this.availabilityService.availability$;

  constructor(private readonly availabilityService: AvailabilityService) {}

  //calculate this month and set as start to future rolling 6 months

  //calculate the future 6 months

  //get the source data and style those dates as available
}

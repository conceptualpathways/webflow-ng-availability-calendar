import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDatepickerModule],
  templateUrl: './availability-calender.component.html',
  styleUrls: ['./availability-calender.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailabilityCalenderComponent {}

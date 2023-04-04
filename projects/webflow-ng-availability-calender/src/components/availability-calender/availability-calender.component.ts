import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './availability-calender.component.html',
  styleUrls: ['./availability-calender.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailabilityCalenderComponent {

}

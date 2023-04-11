import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { AvailabilityCalendarComponent as AvailabilityCalendarComponent } from './components/availability-calendar/availability-calendar.component';

(async () => {
  const platform = await createApplication({
    providers: [],
  });
  const injector = platform.injector;

  const availabilityCalendarElement = createCustomElement(
    AvailabilityCalendarComponent,
    { injector }
  );
  customElements.define('availability-calendar', availabilityCalendarElement);
})();

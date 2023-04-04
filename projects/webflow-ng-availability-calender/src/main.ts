
import { createCustomElement } from "@angular/elements";
import { createApplication } from "@angular/platform-browser";
import { AvailabilityCalenderComponent } from "./components/availability-calender/availability-calender.component";

(async () => {
  const platform = await createApplication({
    providers: [],
  });
  const injector = platform.injector;

  const availabilityCalenderElement = createCustomElement(AvailabilityCalenderComponent, { injector });
  customElements.define('availability-calender', availabilityCalenderElement);
})();

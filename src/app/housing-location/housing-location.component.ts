import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocation } from "../housing-location";
import { RouterModule } from "@angular/router";
@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <!-- [<property_name>] tells angular its a dynamic property whose value should be inferred from input parameters or @Input here -->
      <!-- {{}} this is normal string ineterpolation and does not make the property dynamic -->
      <!--{{}} can be used to only make a part of value dynamic or use expression-->
      <!--[<property_name>] makes the whole property of an HTML tag dynamic-->
      <img
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        class="listing-photo"
      />
      <!--Here {{}} is used to have expressions-->
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <!--Dynamic url -->
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent {
  //? "!" mark is used to tell ts compiler that housingLocation
  //? variable will not be null and we guarantee that.
  @Input() housingLocation!: HousingLocation;
}

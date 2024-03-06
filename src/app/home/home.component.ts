import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing-location";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingService } from "../housing.service";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <!--
          '#' creates a variable called "template variable"
          this template variable gives us access to the value of inout field which we can pass to else where.
          Note: We are not controlling the state of the input so, it is an uncontrolled component. While FormGroup creates a controlled component
      -->
        <input placeholder="filter by city" type="text" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
      <section class="results">
        <!--*ngFor is a for loop and you see a forEach kinda loop-->
        <!--[<custom_propery_name] is used to pass data to that parameter as you do in react-->
        <app-housing-location
          *ngFor="let housingLocation of filteredLocationList"
          [housingLocation]="housingLocation"
        />
      </section>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      })
      .catch((error) => {
        console.error("Error in getting list of housing locations");
      });
  }
  filterResults(text: String) {
    this.filteredLocationList = !text
      ? this.housingLocationList
      : this.housingLocationList.filter((housingLocation: HousingLocation) =>
          housingLocation?.city.toLowerCase().includes(text.toLowerCase())
        );
  }
}

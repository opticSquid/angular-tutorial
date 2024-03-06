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
        <input placeholder="filter by city" type="text" />
        <button class="primary" type="button">Search</button>
      </form>
      <section class="results">
        <!--*ngFor is a for loop and you see a forEach kinda loop-->
        <!--[<custom_propery_name] is used to pass data to that parameter as you do in react-->
        <app-housing-location
          *ngFor="let housingLocation of housingLocationList"
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
  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList:HousingLocation[])=>{
      this.housingLocationList = housingLocationList;
    }).catch(error=>{
      console.error("Error in getting list of housing locations");
  });
  }
}

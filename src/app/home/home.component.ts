import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input placeholder="filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
      <section class="results">
        <app-housing-location />
      </section>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {}

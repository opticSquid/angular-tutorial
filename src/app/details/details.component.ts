import { Component, Inject, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>details works!</p>
    <section>
      {{ hosuingLocationId }}
    </section>
  `,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  hosuingLocationId: number = 0;
  constructor() {
    this.hosuingLocationId = Number(this.route.snapshot.params["id"]);
  }
}

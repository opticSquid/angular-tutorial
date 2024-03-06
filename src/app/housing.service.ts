import { Injectable } from "@angular/core";
import { HousingLocation } from "./housing-location";
@Injectable({
  providedIn: "root",
})
export class HousingService {
  private _url = "http://localhost:3000/locations";
  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this._url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: Number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this._url}/${id}`);
    return (await data.json()) ?? {};
  }
  submitApplication(firstName: String, lastName: String, email: String) {
    console.log({ firstName: firstName, lastName: lastName, email: email });
  }
}

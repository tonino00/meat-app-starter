import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Http, Headers, RequestOptions } from "@angular/http";
import { MEAT_API } from "app/app.api";
import { Rating } from "./rating.model";

@Injectable()
export class RatingService {
  constructor(private http: Http) {}

  setRate(rating: Rating): Observable<string> {
    const headers = new Headers();
    headers.append("Content-type", "application/json");
    return this.http
      .post(
        `${MEAT_API}/orders`,
        JSON.stringify(rating),
        new RequestOptions({ headers: headers })
      )
      .map((response) => response.json())
      .map((rate) => rate.id);
  }
}

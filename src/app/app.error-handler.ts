import { Response } from "@angular/http";
import { _throw } from "rxjs/observable/throw";
import { Observable } from "rxjs/Observable";

export class ErrorHandler {
  static handlerError(error: Response | any) {
    let ErrorMessage: string;
    if (error instanceof Response) {
      ErrorMessage = `Error ${error.status} accessing the URL ${error.url} - ${error.statusText}`;
    } else {
      ErrorMessage = error.toString();
    }

    console.log(ErrorMessage);
    return Observable.throw(ErrorMessage);
  }
}

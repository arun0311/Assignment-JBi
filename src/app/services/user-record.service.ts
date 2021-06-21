import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { IRegisteredUsers, IRegisterUser } from '../enums/user.enum';

const request = {
  "type": "object",
  "properties": {
    "id": { "type": "string", "ipsum": "id" },
    "name": { "type": "string", "ipsum": "name" },
    "email": { "type": "string", "format": "email" },
    "bio": { "type": "string", "ipsum": "sentence" },
    "age": { "type": "number" },
    "avatar": { "type": "string", "ipsum": "small image" }
  }
}
@Injectable({
  providedIn: 'root'
})
export class UserRecordService {

  constructor(private http: HttpClient) { }

  /**
   * send user details for registration
   * @method registerUser
   */
  public registerUser(userRecord: IRegisterUser): Observable<any> {
    const url = '';
      return this.http.post<IRegisterUser>(url, userRecord)
      .pipe(
        tap(res=> res),
        catchError(this.handleError)
      );
  }

  /**
   * get all register users record
   * @method getRegisteredUsers
   */
  public getRegisteredUsers(): Observable<IRegisteredUsers> {
    const url = "http://schematic-ipsum.herokuapp.com/?n=50";
    return this.http.post<IRegisteredUsers>(url, request)
    .pipe(
      tap((users: IRegisteredUsers) => users ),
      catchError(this.handleError)
    );
  }

  /**
   * handle api errors
   * @method handleError
   */
  public handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
    }
}

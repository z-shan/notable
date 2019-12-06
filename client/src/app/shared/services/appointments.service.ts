import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AppointmentsService {
    private requestUrl = '/api/appointments';
    constructor(private http: HttpClient) {}

    getAppointmentsByPhysicianId(physicianId): Observable<any> {
        return this.http.get(this.requestUrl + '/physician/' + physicianId)
            .pipe(
                catchError(err => throwError(err))
            );
    }

}

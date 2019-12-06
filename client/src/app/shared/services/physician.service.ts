import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class PhysicianService {
    private requestUrl = '/api/physicians';
    constructor(private http: HttpClient) {}

    getPhysicians(): Observable<any> {
        return this.http.get(this.requestUrl)
            .pipe(
                catchError(err => throwError(err))
            );
    }
}

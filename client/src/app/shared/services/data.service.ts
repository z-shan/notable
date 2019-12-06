import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class DataService {
    private requestUrl = '/api/data';
    constructor(private http: HttpClient) {}

    getData(): Observable<any> {
        return this.http.get(this.requestUrl)
            .pipe(
                catchError(err => throwError(err))
            );
    }

}

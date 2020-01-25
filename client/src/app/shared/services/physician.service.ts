import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { IPhysician } from '../models/physician.model';

@Injectable()
export class PhysicianService {
    private requestUrl = '/api/physicians';

    selectedPhysician: IPhysician;
    private selectedPhysician$ = new BehaviorSubject<IPhysician>(this.selectedPhysician);
    selectedPhysicianChanged$ = this.selectedPhysician$.asObservable();

    constructor(private http: HttpClient) {}

    getPhysicians(): Observable<any> {
        return this.http.get(this.requestUrl)
            .pipe(
                catchError(err => throwError(err))
            );
    }

    setSelectedPhysician(physician: IPhysician): void {
        this.selectedPhysician = physician;
        this.selectedPhysician$.next(this.selectedPhysician);
    }
}

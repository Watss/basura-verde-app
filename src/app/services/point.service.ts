import { Point } from './../models/point.model';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class PointService{

    private baseUrl: string = environment.baseURL;

    constructor(private http: HttpClient){}

    getPoints(): Observable<Point[]> {
        return this.http.get<Point[]>(`${this.baseUrl}/points`);
    }
}

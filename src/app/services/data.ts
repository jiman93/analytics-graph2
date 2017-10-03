import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppServices{
    private _url: string = '../../assets/maintenance.json';
    constructor(private http: Http) {
    }
    getJSON() {
         return this.http.get(this._url)
         .map((response:Response) => response.json());
     }
}
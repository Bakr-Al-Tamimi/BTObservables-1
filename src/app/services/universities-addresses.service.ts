import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesAddressesService {
  private url = 'http://universities.hipolabs.com/search?country=Jordan';

  constructor(private http: HttpClient) { }

  getUniversities(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}

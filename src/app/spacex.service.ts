import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getMissions(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getMissionsByYear(year: string): Observable<any> {
    return this.http.get(`https://api.spacexdata.com/v3/launches?launch_year=${year}`);
  }

  getMissionById(id: string): Observable<any> {
    return this.http.get(`https://api.spacexdata.com/v3/launches/${id}`);
  }
  
  
}

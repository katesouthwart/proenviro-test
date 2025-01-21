import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get('https://dummyjson.com/products').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}

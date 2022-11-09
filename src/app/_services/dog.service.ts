import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DogService {
  private dogsUrl = 'https://dog.ceo/api/breed/pug/images/random/';

  constructor(
    private http: HttpClient
  ) { }

  getImages(): Observable<any> {
    return this.http.get<any>(this.dogsUrl + '100');
  }

  getImage(): Observable<any> {
    return this.http.get<any>(this.dogsUrl + '1');
  }
}

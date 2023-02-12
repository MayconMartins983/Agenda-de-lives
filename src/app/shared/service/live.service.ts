import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Live } from '../models/live.model';
import { ResponsePageable } from '../models/response.Pageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = 'http://localhost:8080/lives'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getLivesWithFlag(flag: string):Observable<ResponsePageable> {
    return this.http.get<ResponsePageable>(this.apiUrl + '?flag=' + flag)
  }

  postLives(live: any): Observable<Live> {
    return this.http.post<Live>(this.apiUrl, live, this.httpOptions)
  }
}

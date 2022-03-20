import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MorseServiceService {

  url = environment.URL + '?text=';

  constructor(private http: HttpClient) { }

  public getMorse(texto: string): Observable<any>{
    return this.http.get<any>(this.url + texto);
  }
}

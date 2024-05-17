import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Nave } from './nave';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NaveService {

  private apiUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/main/2024-10%20Star%20Wars/spaceships.json';
constructor(private http : HttpClient) { }

getNavess(): Observable<Nave[]> {
  return this.http.get<Nave[]>(this.apiUrl);

  }
}

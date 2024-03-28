import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private readonly API = "/api/clients"

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Client[]>(this.API).pipe(
      first(),
      delay(1000),
      tap(clients => console.log(clients))
    );
  }

  findById(id: string){
    return this.httpClient.get<Client>(`${this.API}/getId/${id}`);
  }

  save(record: Partial<Client>){
    return this.httpClient.post<Client>(this.API, record);
  }
}

import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private readonly API = "/assets/clients.json"

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
    return this.create(record);
  }

  private create(record: Partial<Client>){
    return this.httpClient.post<Client>(this.API, record);
  }

  private update(record: Partial<Client>){
    return this.httpClient.put<Client>(`${this.API}/${record.id}`, record).pipe(first());
  }

  delete(id: string){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}

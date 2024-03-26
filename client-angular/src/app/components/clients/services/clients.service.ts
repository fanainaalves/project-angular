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
      delay(5000),
      tap(clients => console.log(clients))
    );
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ClientsService } from '../services/clients.service';
import { Observable, of } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientResolver implements Resolve<Client> {

  constructor(private service: ClientsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Client>{
    if(route.params && route.params['name']){
      return this.service.findByName(route.params['name']);
    }
    return of({id: "", name: "", email: "", cel: "", cpf: "", registryUser: ""});
  }
};

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, MaybeAsync, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ClientsService } from '../services/clients.service';
import { Observable, of } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientResolver implements ResolveFn<Client> {

  constructor(private service: ClientsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Client>{
    if(route.params && route.params['id']){
      return this.service.findById(route.params['id']);
    }
    return of({id: "", name: "", email: "", cel: "", cpf: "", registryUser: ""});
  }
};

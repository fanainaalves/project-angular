import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Client } from '../models/client';
import { ClientsService } from '../services/clients.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/error-dialog/error-dialog.component';

@Component({
  selector: 'app-list-clients',
  standalone: true,
  imports: [RouterModule, CommonModule, MatTableModule, MatCardModule, MatToolbarModule, MatProgressSpinnerModule],
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.css'
})
export class ListClientsComponent implements OnInit {

  clients$: Observable<Client[]>;
  displayedColumns = [ "id", "name", "email", "cel", "cpf", "created", "updated", "registryUser" ]
  //clientsServices: ClientsService;

  constructor(private clientsServices: ClientsService, public dialog: MatDialog){
    //this.clientsServices = new ClientsService();
    this.clients$ = this.clientsServices.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar clientes.');
        return of([])
      })
    );
  }

  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }
  ngOnInit(): void { }
}

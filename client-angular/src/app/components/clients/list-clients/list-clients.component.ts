import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule, RouterLink } from '@angular/router';
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
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {ClientsComponent} from '../clients/clients.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-list-clients',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIcon,
    ClientsComponent,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    RouterLink
  ],
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.css'
})
export class ListClientsComponent implements OnInit {

  clients$: Observable<Client[]> | null = null;

  constructor(
    private clientsServices: ClientsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
    ){
      this.refresh();
  }

  refresh() {
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
  ngOnInit(): void {
  }

  onAdd(){
    console.log('Cliquei aqui')
    this.router.navigate(['newClient' ], {relativeTo: this.route})
  }

  onEdit(client: Client){
    this.router.navigate(['editClient', client.id], {relativeTo: this.route})
  }

  onDelete(client: Client){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Tem certeza que deseja remover esse cliente?',
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.clientsServices.delete(client.id).subscribe(() => {
          this.refresh();
          this.snackbar.open('Cliente deletado com sucesso!', "X", {
            duration: 1000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          })
        },
        () => this.onError('Erro ao tentar remover curso.')
        );
      }
    });
  }


}


import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppModule } from '../../../app.routes';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ClientsService } from '../services/clients.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-register-clients',
  standalone: true,
  imports: [
    CommonModule,
    AppModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './register-clients.component.html',
  styleUrl: './register-clients.component.css'
})

export class RegisterClientsComponent implements OnInit{
  form: FormGroup;

  constructor(

    private formBuilder: FormBuilder,
    private service: ClientsService,
    private snackBar: MatSnackBar,
    private location: Location
    ){

    this.form = this.formBuilder.group({
      id: [null],
      name: [null],
      email: [null],
      cel: [null],
      cpf: [null],
      registryUser: [null],
    });

  }
  ngOnInit(): void{

  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Cliente salvo com sucesso', '', { duration: 2000});
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar cliente', '', { duration: 2000});
  }
}



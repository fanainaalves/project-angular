import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppModule } from '../../../app.routes';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ClientsService } from '../services/clients.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Client } from '../models/client';
import { ActivatedRoute } from '@angular/router';


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

  form!: FormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ClientsService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void{
    const client: Client = this.route.snapshot.data['client'];
    this.form = this.formBuilder.group({
      id: [client.id],
      name: [client.name, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: [client.email, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      cel: [client.cel , [Validators.required, Validators.minLength(8), Validators.maxLength(11)]],
      cpf: [client.cpf, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      registryUser: [client.registryUser, [Validators.required]]
    })
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

  getErrorMessage(fieldName: string){
    const field = this.form.get(fieldName);
    if(field ?.hasError('required')){
      return 'Campo obrigatório';
    }
    if(field ?.hasError('minlength')){
      const requiredLength = field.errors ? field.errors['minlength']['requiredLength'] : 3;
      return `Tamanho mínimo de ${requiredLength} caracteres.`;
    }
    if(field ?.hasError('maxlength')){
      const requiredLength = field.errors ? field.errors['maxlength']['requiredLength'] : 30;
      return  `Tamanho máximo de ${requiredLength} caracteres.`;
    }
    return 'Erro! Campo inválido';

  }


}



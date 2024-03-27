import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppModule } from '../../../app.routes';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-register-clients',
  standalone: true,
  imports: [CommonModule, AppModule, ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './register-clients.component.html',
  styleUrl: './register-clients.component.css'
})
export class RegisterClientsComponent implements OnInit{
  form: FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      id: [null],
      name: [null],
      email: [null],
      cel: [null],
      cpf: [null],
      created: [null],
      updated: [null],
      registryUser: [null],
    });

  }
  ngOnInit(): void{

  }
}

import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-clients',
  standalone: true,
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './find-clients.component.html',
  styleUrl: './find-clients.component.css'
})
export class FindClientsComponent implements OnInit{

  idBuscado: string = '';

  constructor(private http: HttpClient){}

  buscarClientes(){
    this.http.get('/api/clients/getId/' + this.idBuscado).subscribe((clientes: any) => {
      console.log(clientes);
    })
  }

  ngOnInit(): void {}
}

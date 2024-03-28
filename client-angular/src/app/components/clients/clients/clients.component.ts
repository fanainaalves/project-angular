import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../models/client';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {MatIcon, MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatIcon
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit{

  @Input() clients: Client[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);


  displayedColumns = [ "id", "name", "email", "cel", "cpf", "registryUser", "actions" ]


  constructor(private router: Router, private route: ActivatedRoute){}

  onAdd() {
    this.add.emit(true);
  }

  ngOnInit(): void {}

  onEdit(client: Client){
    this.edit.emit(client);
  }
}

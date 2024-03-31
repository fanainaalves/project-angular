import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-find-clients',
  standalone: true,
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './find-clients.component.html',
  styleUrl: './find-clients.component.css'
})
export class FindClientsComponent {

}

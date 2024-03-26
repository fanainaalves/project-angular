import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ClientsComponent } from './components/clients/clients.component';
import { RegisterClientsComponent } from './components/clients/register-clients/register-clients.component';
import { ListClientsComponent } from './components/clients/list-clients/list-clients.component';
import { FindClientsComponent } from './components/clients/find-clients/find-clients.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ClientsComponent, RegisterClientsComponent, ListClientsComponent, FindClientsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client-angular';
}

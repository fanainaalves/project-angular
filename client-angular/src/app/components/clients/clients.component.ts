import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

}

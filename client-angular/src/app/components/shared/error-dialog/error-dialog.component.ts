import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-error-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.css'
})
export class ErrorDialogComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: string){

  }
  ngOnInit(): void{}

}

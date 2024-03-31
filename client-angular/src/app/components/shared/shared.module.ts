import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ErrorDialogComponent,
    ConfirmDialogComponent
  ],
  exports:[
    ErrorDialogComponent,
    ConfirmDialogComponent
  ]
})
export class SharedModule { }

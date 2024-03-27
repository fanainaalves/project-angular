import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ListClientsComponent } from './components/clients/list-clients/list-clients.component';
import { FindClientsComponent } from './components/clients/find-clients/find-clients.component';
import { RegisterClientsComponent } from './components/clients/register-clients/register-clients.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "clients"
  },
  {
    path: "",
    loadComponent: () => import("./components/clients/clients.component").then(m => m.ClientsComponent)
  },
  {
    path: "find",
    component: FindClientsComponent
  },
  {
    path: "list",
    component: ListClientsComponent
  },
  {
    path: "newClient",
    component: RegisterClientsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    HttpClientModule
  ]
})

export class AppModule {}

import { RouterModule, Routes } from '@angular/router';
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
    redirectTo: "list"
  },
  {
    path: "find",
    loadComponent: () => import("./components/clients/find-clients/find-clients.component").then(m => m.FindClientsComponent)
  },
  {
    path: "list",
    loadComponent: () => import("./components/clients/list-clients/list-clients.component").then(m => m.ListClientsComponent)
  },
  {
    path: "newClient",
    loadComponent: () => import("./components/clients/register-clients/register-clients.component").then(m => m.RegisterClientsComponent)
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ]
})

export class AppModule {}

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClientResolver } from './components/clients/guards/client.resolver';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "list"
  },
  {
    path: "list",
    loadComponent: () => import("./components/clients/list-clients/list-clients.component").then(m => m.ListClientsComponent)
  },
  {
    path: "find",
    loadComponent: () => import("./components/clients/find-clients/find-clients.component").then(m => m.FindClientsComponent)
  },
  {
    path: "newClient",
    loadComponent: () => import("./components/clients/register-clients/register-clients.component").then(m => m.RegisterClientsComponent),
    resolve: {client: ClientResolver}
  },
  {
    path: "editClient/:id",
    loadComponent: () => import("./components/clients/register-clients/register-clients.component").then(m => m.RegisterClientsComponent),
    resolve: {client: ClientResolver}
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

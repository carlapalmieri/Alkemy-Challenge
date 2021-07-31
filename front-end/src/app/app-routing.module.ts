import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmOperationsComponent } from './components/abm/abm-operations/abm-operations.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'operations',
    component: AbmOperationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

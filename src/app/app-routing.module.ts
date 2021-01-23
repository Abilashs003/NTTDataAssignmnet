import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DataViewComponent } from './data-view/data-view.component';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent,
  },

  {
    path: 'data-view',
    component: DataViewComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: '**',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

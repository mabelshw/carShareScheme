import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomepageComponent} from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent },
  {path: 'homepage', component: HomepageComponent},
  {path: 'register', component: RegisterComponent},

  {path: '',   redirectTo: '/homepage', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

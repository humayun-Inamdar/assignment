import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'contact', component: ContactUsComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

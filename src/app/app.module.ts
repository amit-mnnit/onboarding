import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// containers
import { AppComponent } from './app.component';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', loadChildren: '../login/login.module#LoginModule' },
  { path: 'register', loadChildren: '../register/register.module#RegisterModule' },
  { path: 'registerForm', loadChildren: '../register-form/register-form.module#RegisterFormModule' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { RegisterFormComponent } from './register-form.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: RegisterFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    RegisterFormComponent
  ]
})
export class RegisterFormModule {}
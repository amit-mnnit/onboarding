import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Lazy loading demo</h1>
      <nav class="app-nav">
        <div class="wrapper">
          <a routerLink="login" routerLinkActive="active">Login</a>
          <a routerLink="register" routerLinkActive="active">register</a>
          <a routerLink="registerForm" routerLinkActive="active">form</a>
        </div>
      </nav>
      <div class="wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {}

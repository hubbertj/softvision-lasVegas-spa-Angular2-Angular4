import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutRoutingModule } from './about/about-routing.module';
import { ListRoutingModule } from './list/list-routing.module';
import { LoginComponentComponent } from './login-component/login-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

//list
import { ListComponent } from './list/list.component';
import { ViewListComponent} from './list/component/view-list/view-list.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponentComponent, data: { title: 'login' } },
  { path: 'about', component: AboutRoutingModule, data: { title: 'about' } },
  { path: 'password/reset', component: PasswordResetComponent, data: { title: 'password-reset' } },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    PageNotFoundComponent,
    PasswordResetComponent,
    ViewListComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AboutRoutingModule,
    ListRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

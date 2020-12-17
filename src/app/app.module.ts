import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'users', component: UsersComponent }
    ])
  ],
  declarations: [ AppComponent, HelloComponent, UsersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import { RestTestService } from './rest-test.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: 'ngboot-app'}, RestTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

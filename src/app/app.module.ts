import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';
import { APP_ROUTES } from "./app.routes";
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    ServicesModule,
    HttpModule,
    APP_ROUTES
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CharListComponent } from './char-list/char-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestApiService } from './char-list/services/request-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RequestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {YouTubePlayerModule} from '@angular/youtube-player'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    YouTubePlayerModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

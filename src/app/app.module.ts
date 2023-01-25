import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSnakeModule } from 'ngx-snake';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxSnakeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
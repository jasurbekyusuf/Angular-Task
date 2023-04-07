import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InheritanceListComponent } from './inheritance-list/inheritance-list.component';
import { InheritanceComponent } from './inheritance/inheritance.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InheritanceListComponent,
    InheritanceComponent,
    ResultComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

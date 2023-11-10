import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { CreateTodolistComponent } from './create-todolist/create-todolist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TododetailComponent } from './tododetail/tododetail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    CreateTodolistComponent,
    TododetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

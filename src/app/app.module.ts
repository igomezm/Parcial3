import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Component} from '@angular/core';

import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EditComponent } from './edit/edit.component';
//import {AlleventsModule} from './allevents/allevents.model';

import { RegisterComponent } from './register/register.component';
import { AlleventsComponent } from './allevents/allevents.component';
import { StoreModule } from '@ngrx/store';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatFormFieldControl} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatNativeDateModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

export const routes: Routes = [
  {path: '', redirectTo:"Allevents", pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, pathMatch: 'full'},
  {path: 'edit', component: EditComponent, pathMatch: 'full'},
  {path: 'Allevents', component: AlleventsComponent, pathMatch: 'full'}
  
  //{path: 'profile/tweet' redirecTo:"tweets", pathMatch:'full'}
];



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EditComponent,
    AlleventsComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatSnackBarModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

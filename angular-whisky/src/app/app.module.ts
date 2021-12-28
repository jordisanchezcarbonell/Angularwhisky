import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AllwhiskyComponent } from './whisky/componentes/allwhisky/allwhisky.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'  
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { DialogoConfirmacionComponent } from './whisky/componentes/dialogo-confirmacion/dialogo-confirmacion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './whisky/componentes/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    AllwhiskyComponent,
    DialogoConfirmacionComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogoConfirmacionComponent
  ]
})
export class AppModule { }

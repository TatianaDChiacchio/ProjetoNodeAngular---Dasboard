import { DadosService } from './servicos/dados.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ConversorComponent } from './componentes/conversor/conversor.component';
import { HttpClientModule}  from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ConversorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [DadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

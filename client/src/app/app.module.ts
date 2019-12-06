import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBootstrapModule } from './shared/modules/app-bootstrap.module';
import { PhysicianService } from './shared/services/physician.service';
import { AppointmentsService } from './shared/services/appointments.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PhysicianService, AppointmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

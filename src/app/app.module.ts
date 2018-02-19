import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { AppRoutingModule } from './/app-routing.module';
import { DroneService } from './_services/drone-service/drone-service.service';



@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DroneService],
  bootstrap: [AppComponent]
})
export class AppModule { }

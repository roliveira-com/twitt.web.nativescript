import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

import { ComponentsModule } from './shared/components/components.module';
import { LoginComponent } from './login/login.component';
import { SplashComponent } from './login/components/splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SplashComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

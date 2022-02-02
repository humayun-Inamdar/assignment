import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AnalyticsComponent } from './analytics/analytics.component';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule,SocialAuthServiceConfig, FacebookLoginProvider } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
const clientId='580084249630-2cct359090o4efblq43g7lktr689liq3.apps.googleusercontent.com';
@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    AnalyticsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,SocialLoginModule
  ],
  providers: [{
    provide: "SocialAuthServiceConfig",
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            clientId
          )
        },{
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('1388957471563788')
        }
      ]
    } as SocialAuthServiceConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

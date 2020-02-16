import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminModule } from './admin/admin.module';


const firebaseConfig = {
  apiKey: "AIzaSyDsZsRRKrjo3qo9dFfIS6G6GNI6cSRdOvw",
  authDomain: "my-portfolio-af58d.firebaseapp.com",
  databaseURL: "https://my-portfolio-af58d.firebaseio.com",
  projectId: "my-portfolio-af58d",
  storageBucket: "my-portfolio-af58d.appspot.com",
  messagingSenderId: "515332046823",
  appId: "1:515332046823:web:ef5b39bb640b0d168c0742",
  measurementId: "G-W1MKXRV5FP"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

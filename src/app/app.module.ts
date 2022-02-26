import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SwiftComponent } from './vehicles/swift/swift.component';
import { InnovaComponent } from './vehicles/innova/innova.component';
import { Tempo26seaterComponent } from './vehicles/tempo26seater/tempo26seater.component';
import { Tempo17seaterComponent } from './vehicles/tempo17seater/tempo17seater.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ThirtysixseaterbusComponent } from './thirtysixseaterbus/thirtysixseaterbus.component';
import { BookyourtripComponent } from './bookyourtrip/bookyourtrip.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    VehiclesComponent,
    SwiftComponent,
    InnovaComponent,
    Tempo26seaterComponent,
    Tempo17seaterComponent,
    SigninComponent,
    SignupComponent,
    ThirtysixseaterbusComponent,
    BookyourtripComponent,
    EnquiryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

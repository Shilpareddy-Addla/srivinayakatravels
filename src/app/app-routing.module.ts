import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookyourtripComponent } from './bookyourtrip/bookyourtrip.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ThirtysixseaterbusComponent } from './thirtysixseaterbus/thirtysixseaterbus.component';
import { InnovaComponent } from './vehicles/innova/innova.component';
import { SwiftComponent } from './vehicles/swift/swift.component';
import { Tempo17seaterComponent } from './vehicles/tempo17seater/tempo17seater.component';
import { Tempo26seaterComponent } from './vehicles/tempo26seater/tempo26seater.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'aboutus',component:AboutusComponent  },
{path:'contactus',component:ContactusComponent},
{path:'bookyourtrip',component:BookyourtripComponent},
{path:'enquiry',component:EnquiryComponent},
{path:'vehicles',component:VehiclesComponent ,children:[{path:'swift',component:SwiftComponent},
{path:'innova',component:InnovaComponent},
{path:'tempo17seater',component:Tempo17seaterComponent},
{path:'tempo26seater',component:Tempo26seaterComponent},
{path:'thirtysixseaterbus',component:ThirtysixseaterbusComponent},
]},
{path:'Signin',component:SigninComponent},
{path:'Signup',component:SignupComponent},
{path:'',redirectTo:'home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

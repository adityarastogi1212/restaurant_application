import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { home } from './home';
import { WebService } from './WebService';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { DownloadQrCodeComponent } from './download-qr-code/download-qr-code.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    home, 
    BsNavbarComponent, 
    UploadImageComponent, 
    DownloadQrCodeComponent, 
    ViewMenuComponent, LoginComponent, RegisterComponent
    //HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      //{ path:'home',component:home},
      //{ path:'',component:UploadImageComponent},
      { path:'upload-image',component:UploadImageComponent },
      { path:'download-qr-code',component:DownloadQrCodeComponent },
      { path:'view-menu',component:ViewMenuComponent },
      { path:'',component:LoginComponent},
      { path:'login',component:LoginComponent},
      { path:'register',component:RegisterComponent}
    ]),
    NgbModule,
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }

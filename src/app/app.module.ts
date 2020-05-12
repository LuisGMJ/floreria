import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';


import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FlipBookComponent } from './shared/flip-book/flip-book.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { ModalComponent } from './shared/modal/modal.component';
import { MapsComponent } from './shared/maps/maps.component';

import { SafeDomPipe } from './shared/pipes/safe-dom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FlipBookComponent,
    CarouselComponent,
    HomeComponent,
    DetailsComponent,
    ModalComponent,
    MapsComponent,
    SafeDomPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxNavbarModule,
    AlertModule,
    BsDropdownModule,
    CarouselModule,
    ModalModule.forRoot()
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

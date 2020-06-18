import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase config
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
/* import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FlexLayoutModule } from '@angular/flex-layout'; */

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FlipBookComponent } from './shared/flip-book/flip-book.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { ModalComponent } from './shared/modal/modal.component';
import { MapsComponent } from './shared/maps/maps.component';

import { SafeDomPipe } from './shared/pipes/safe-dom.pipe';
import { environment } from '../environments/environment';
import { LoadingComponent } from './shared/loading/loading.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    SafeDomPipe,
    LoadingComponent,
    AboutComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AlertModule,
    BsDropdownModule,
    CarouselModule,
    CollapseModule,
    ModalModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    PaginationModule.forRoot(),
    FormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//for data-binding - using ngModel
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//for toasts notifications
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//for routingncu --upgrade
import { RouterModule } from '@angular/router';

//for template-driven forms. e.g ngForm
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app-structure/header/header.component';
import { FooterComponent } from './app-structure/footer/footer.component';
import { NavbarComponent } from './app-structure/navbar/navbar.component';
import { HomeComponent } from './app-basic-views/home/home.component';
import { AboutComponent } from './app-basic-views/about/about.component';
import { ErrorComponent } from './app-basic-views/error/error.component';
import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'

import { SidebarComponent } from './app-structure/sidebar/sidebar.component';
import { ServicesComponent } from './app-basic-views/services/services.component';
import { FaqComponent } from './app-basic-views/faq/faq.component';
import { PackagesComponent } from './app-basic-views/packages/packages.component';
import { ContactComponent } from './app-basic-views/contact/contact.component';
import { WebAppComponent } from './app-basic-views/package/web-app/web-app.component';
import { GraphicDesignComponent } from './app-basic-views/package/graphic-design/graphic-design.component';
import { MediaComponent } from './app-basic-views/package/media/media.component';
import { CommonModule } from '@angular/common';

//for share buttons
// import { NgxShareButtonsComponent } from './app-shared/social-media-buttons/ngx-share-buttons/ngx-share-buttons.component';
// import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
// import { ShareIconsModule } from 'ngx-sharebuttons/icons';


//for google maps
// import { GoogleMapComponent } from './app-shared/google-map/google-map/google-map.component';
// import { GoogleMapsModule } from '@angular/google-maps';

//for carousels
import { NgbCarouselConfig, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CarouselComponent } from './app-shared/image-slider/carousel/carousel.component';
import { NgBootstrapCarouselComponent } from './app-shared/image-slider/ng-bootstrap-carousel/ng-bootstrap-carousel.component';


//for lightbox image gallery
import { LightboxModule } from 'ngx-lightbox';

import { NgxLightboxComponent } from './app-shared/image-viewer/ngx-lightbox/ngx-lightbox.component';
// import { Lightbox2Component } from './app-shared/image-viewer/lightbox2/lightbox2.component';
// import { BootstrapLightboxComponent } from './app-shared/image-viewer/bootstrap-lightbox/bootstrap-lightbox.component';

//for share-this buttons
import { SharethisAngularModule } from 'sharethis-angular';
import { ShareThisButtonsComponent } from './app-shared/social-media-buttons/share-this-buttons/share-this-buttons.component';



// import { NgIf } from '@angular/common';

@NgModule({

  //All the App Components here ...
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    SidebarComponent,
    ServicesComponent,
    FaqComponent,
    PackagesComponent,
    ContactComponent,
    WebAppComponent,
    GraphicDesignComponent,
    MediaComponent,
    // GoogleMapComponent,
    CarouselComponent,
    NgBootstrapCarouselComponent,
    NgxLightboxComponent,
    // Lightbox2Component,
    // BootstrapLightboxComponent,
    // NgxShareButtonsComponent,
    ShareThisButtonsComponent,
  

   
  ],
  imports: [
  
    // NgbCarouselModule,
    // NgIf,

    //All the App Special Models not from @angular/core
    BrowserModule,
    // GoogleMapsModule,
    FontAwesomeModule,
    CommonModule,

    //for share-this buttons
    SharethisAngularModule,
    
    //for Template-Driven forms [ngModel  and ngForm]
    FormsModule,
    ReactiveFormsModule,

    // for carousel
    NgbModule,

    //for lightbox image gallery
    LightboxModule,
    
    //for toasts notifications
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
    }),

    //for routes in App-Routing.Module.ts
    AppRoutingModule,
  ],
  providers: [
    NgbCarouselConfig
  ],
  bootstrap: [AppComponent]
})
  
export class AppModule { 

  //for Awesome Fonts to be accessible globally
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
  
}

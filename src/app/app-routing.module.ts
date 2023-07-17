import { ContactComponent } from './app-basic-views/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app-basic-views/home/home.component';
import { AboutComponent } from './app-basic-views/about/about.component';
import { ServicesComponent } from './app-basic-views/services/services.component';
import { ErrorComponent } from './app-basic-views/error/error.component';
import { PackagesComponent } from './app-basic-views/packages/packages.component';
import { DeactivateRoute } from './app-shared/routes-guard/deactivate-route';


const routes: Routes = [
  //components content are rendared by <router-outlet></router-outlet> inside the app component

  // redirectTo - home
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent, title: "yPac - Home"  },
  
  { path: 'home', component: HomeComponent, title: "yPac - Home" },
  { path: 'about', component: AboutComponent, title: "yPac - About Us" },
  { path: 'services', component: ServicesComponent, title: "yPac - Our Services" },
  { path: 'packages', component: PackagesComponent, title: "yPac - Our Packages"  },
  { path: 'contact', component: ContactComponent, canDeactivate: [DeactivateRoute], title: "yPac - Contact Us" },
  
  // redirectTo - Error page
  { path: '**', component: ErrorComponent, title: "yPac - Not found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

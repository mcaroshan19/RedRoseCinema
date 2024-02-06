import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FilmsComponent } from './films/films.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';


 

const appRoute: Routes=[
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'films', component: FilmsComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'our-work', component: OurWorkComponent},
  
 

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    FilmsComponent,
    GalleryComponent,
    OurWorkComponent,
    HomeComponent,
    FooterComponent
  ],

  imports: [
   
    BrowserModule,
    [RouterModule.forRoot(appRoute)],
    FormsModule,
    
    AppRoutingModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

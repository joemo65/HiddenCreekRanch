import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LearnHowToRideComponent } from './learn-how-to-ride/learn-how-to-ride.component';
import { CampsComponent } from './camps/camps.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InstructorsComponent } from './instructors/instructors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LearnHowToRideComponent,
    CampsComponent,
    AboutUsComponent,
    InstructorsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

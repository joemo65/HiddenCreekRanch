import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { LearnHowToRideComponent } from './learn-how-to-ride/learn-how-to-ride.component';
import { CampsComponent } from './camps/camps.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { AppRoutingModule } from './app-routing.module';
import { HorsemanshipComponent } from './learn-how-to-ride/horsemanship/horsemanship.component';
import { WesternComponent } from './learn-how-to-ride/western/western.component';
import { EnglishComponent } from './learn-how-to-ride/english/english.component';
import { EnglishRidingComponent } from './camps/english-riding/english-riding.component';
import { EnglishJumpingComponent } from './camps/english-jumping/english-jumping.component';
import { TrailComponent } from './camps/trail/trail.component';
import { BootCampComponent } from './camps/boot-camp/boot-camp.component';
import { HorsesComponent } from './horses/horses.component';
import { FormsComponent } from './forms/forms.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LearnHowToRideComponent,
    CampsComponent,
    AboutUsComponent,
    InstructorsComponent,
    HorsemanshipComponent,
    WesternComponent,
    EnglishComponent,
    EnglishRidingComponent,
    EnglishJumpingComponent,
    TrailComponent,
    BootCampComponent,
    HorsesComponent,
    FormsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

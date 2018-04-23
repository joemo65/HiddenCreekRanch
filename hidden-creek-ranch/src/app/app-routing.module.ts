import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { CampsComponent } from "./camps/camps.component";
import { InstructorsComponent } from "./instructors/instructors.component";
import { LearnHowToRideComponent } from "./learn-how-to-ride/learn-how-to-ride.component";
import { HorsemanshipComponent } from "./learn-how-to-ride/horsemanship/horsemanship.component";
import { WesternComponent } from "./learn-how-to-ride/western/western.component";
import { EnglishComponent } from "./learn-how-to-ride/english/english.component";
import { EnglishRidingComponent } from "./camps/english-riding/english-riding.component";
import { EnglishJumpingComponent } from "./camps/english-jumping/english-jumping.component";
import { TrailComponent } from "./camps/trail/trail.component";
import { BootCampComponent } from "./camps/boot-camp/boot-camp.component";
import { HorsesComponent } from "./horses/horses.component";
import { FormsComponent } from "./forms/forms.component";
import { ContactComponent } from "./contact/contact.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    //{ path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
    { path: 'horses', component: HorsesComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'camps', component: CampsComponent,
        children:  
        [
            { path: 'english-riding', component: EnglishRidingComponent },
            { path: 'english-jumping', component: EnglishJumpingComponent },
            { path: 'trail', component: TrailComponent },
            { path: 'boot-camp', component: BootCampComponent }
        ]   
    },
    { path: 'instructors', component: InstructorsComponent },
    { path: 'learn-how-to-ride', component: LearnHowToRideComponent, 
        children: 
        [
            { path: 'horsemanship', component: HorsemanshipComponent },
            { path: 'western', component: WesternComponent },
            { path: 'english', component: EnglishComponent }
        ]   
    },
    { path: 'forms', component: FormsComponent },
    { path: 'contact', component: ContactComponent },
]; 

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
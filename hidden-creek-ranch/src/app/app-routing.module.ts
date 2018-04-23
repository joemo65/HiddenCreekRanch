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

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    //{ path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
    { path: 'about-us', component: AboutUsComponent },
    { path: 'camps', component: CampsComponent },
    { path: 'instructors', component: InstructorsComponent },
    { path: 'learn-how-to-ride', component: LearnHowToRideComponent, children: 
        [
            { path: 'horsemanship', component: HorsemanshipComponent },
            { path: 'western', component: WesternComponent },
            { path: 'english', component: EnglishComponent }
        ]   
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
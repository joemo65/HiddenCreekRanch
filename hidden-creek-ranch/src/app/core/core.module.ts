import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        //  SharedModule,
        AppRoutingModule,
        NgbModule

    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
})
export class CoreModule {
    
}
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//FIREBASE MODULES
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from "../shared/shared.module";
import { ComponentsModule } from "../components/components.module";

import { PagesComponent } from "./pages.component";
import { TeamsComponent } from './teams/teams.component';

//ENVIROMENTS
import { environment } from "../../environments/environment";

@NgModule({
    declarations: [
        PagesComponent,
        TeamsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PAGES_ROUTES,
        SharedModule,
        ComponentsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
    ],
    providers: [
    ],
})

export class PagesModule { };
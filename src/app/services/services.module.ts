import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { TeamsService,
         AlertsService 
        } from "./services.index";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [],
    providers: [
        TeamsService,
        AlertsService
    ]
})

export class ServicesModule { }
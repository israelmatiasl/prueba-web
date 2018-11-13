import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TeamItemComponent } from './teams/team-item/team-item.component';

@NgModule({
    declarations: [
        TeamItemComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        TeamItemComponent
    ]
})

export class ComponentsModule { }
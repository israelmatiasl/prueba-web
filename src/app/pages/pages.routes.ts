import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { TeamsComponent } from './teams/teams.component';

const pagesRoutes : Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', component: TeamsComponent },
            { path: 'teams', component: TeamsComponent, data : { title: 'Equipos de fútbol' } }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const appRoutes : Routes = [
    { path: '**', component: ErrorComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash : true });
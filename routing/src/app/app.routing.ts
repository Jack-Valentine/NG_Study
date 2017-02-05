/**
 * Created by duera on 2017-02-03.
 */
import {Routes, RouterModule} from "@angular/router";

import { HomeComponent } from './home-component.component';
import { UserComponent } from './user/user.component';
import {ModuleWithProviders} from "@angular/core";

const APP_ROUTES: Routes = [
    { path: 'user/:id', component: UserComponent },
    { path: '', component: HomeComponent }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
import {RouterModule, Routes} from "@angular/router";

import { ModuleWithProviders } from "@angular/core";

import {SigninComponent} from "./unprotected/signin.component";
import {SignupComponent} from "./unprotected/signup.component";
import {ProtectedComponent} from "./protected/protected.component";

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full'  },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'protected', component: ProtectedComponent },
];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);

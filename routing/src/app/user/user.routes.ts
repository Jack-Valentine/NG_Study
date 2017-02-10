/**
 * Created by duera on 2017-02-08.
 */
import { Routes } from "@angular/router";

import { UserDetailComponent } from "./user-detail.component";
import { UserEditComponent } from "./user-edit.component";
import { UserDetailGuard } from "./user-detail.guaard";
import { UserComponent } from "./user.component";

export const USER_ROUTES: Routes = [
    { path: 'detail', component: UserDetailComponent, canActivate: [UserDetailGuard] },
    { path: 'edit' , component: UserEditComponent }
];


import { Routes } from "@angular/router";
import { UserComponent } from "app/user/user.component";
import { SignInComponent } from "app/user/auth/sign-in/sign-in.component";
import { SignUpComponent } from "app/user/auth/sign-up/sign-up.component";
import { HomeComponent } from "app/home/home.component";

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'}
    
];
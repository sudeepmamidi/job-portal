import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { AdminAddUpdateComponent } from './admin-add-update/admin-add-update.component';
import { SignupComponent } from './admin/signup/signup.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
    {
        path: 'admin', component: AdminComponent
    },
    {
        path: 'adminlist', component: AdminlistComponent
    },
    {
        path: 'adminaddupdate', component: AdminAddUpdateComponent
    },
    {
        path: 'admin/signup', component: SignupComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
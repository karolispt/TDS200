import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module')
  .then( m => m.HomePageModule), ...canActivate(redirectUnauthorizedTo(['login']))},
  { path: 'rooms', loadChildren: './rooms/rooms.module#RoomsPageModule' },
  { path: 'addroom', loadChildren: './addroom/addroom.module#AddroomPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule',
  ...canActivate(redirectLoggedInTo(['home'])) },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'roomview', loadChildren: './roomview/roomview.module#RoomviewPageModule' },
  { path: 'forgot', loadChildren: './forgot/forgot.module#ForgotPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

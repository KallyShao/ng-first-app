import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Code404Component } from './code404/code404.component';
import { StarsComponent } from './stars/stars.component';
import { GuardComponent } from './guard/guard.component';
import { LoginGuard } from './util/login.guard';
import { UnsavedGuard } from './util/unsaved.guard';
import { ProDetailComponent } from './pro-detail/pro-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: ProDetailComponent
  },
  {
    path: '**',
    component: Code404Component
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [LoginGuard, UnsavedGuard]
})
export class AppRoutingModule {}
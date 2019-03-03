import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Code404Component } from './code404/code404.component';
import { StarsComponent } from './stars/stars.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/nav',
    pathMatch: 'full'
  },
  {
    path: 'star',
    component: StarsComponent,
    outlet: 'aux'
  },
  {
    path: 'nav',
    component: NavbarComponent,
    data: [{isProd: true}],
    children: [
      {
        path: 'footer',
        component: FooterComponent
      }
    ]
  },
  {
    path: '**',
    component: Code404Component
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
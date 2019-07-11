import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CommunityComponent } from './community/community.component';
import { StoreComponent } from './store/store.component';
import { PhotoComponent } from './community/photo.component';
import { VisitmyhomeComponent } from './community/visitmyhome.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch: "full" },
  { path:'home', component: HomeComponent},
  { path:'login', component: LoginComponent },
  { path:'signup', component: SignupComponent },
  { 
    path:'community',
    component: CommunityComponent,
    children: [
      { path: 'photo', component: PhotoComponent },
      { path: 'visitmyhome', component: VisitmyhomeComponent }
    ]
  },
  { path:'store', component: StoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

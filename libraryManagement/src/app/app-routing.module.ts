import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { PasswordUpdateComponent } from './password-update/password-update.component';
import { LibrarianDataComponent } from './librarian-data/librarian-data.component';
import { StuDataComponent } from './stu-data/stu-data.component';
import { StuBokDetComponent } from './stu-bok-det/stu-bok-det.component';

const routes: Routes = [
{
  path:'', component:MainpageComponent
},
{
  path:'signIn',component:SignInComponent
},
{
  path: 'librarian', component: LibrarianComponent
},
{
  path: 'libData', component: LibrarianDataComponent
},
{
  path: 'stuData', component: StuDataComponent
},
{
  path : 'password', component: PasswordUpdateComponent
},
{
  path:'signUp',component:SignUpComponent,
 
},

{
  path :'stuBokDet', component: StuBokDetComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

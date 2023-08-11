import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { PasswordUpdateComponent } from './password-update/password-update.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LibrarianDataComponent } from './librarian-data/librarian-data.component';
import { StuDataComponent } from './stu-data/stu-data.component';
import { Table } from 'primeng/table';
import { TableModule } from 'primeng/table';
import { StuBokDetComponent } from './stu-bok-det/stu-bok-det.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
       PasswordUpdateComponent,
    LibrarianComponent,
    MainpageComponent,
    SignInComponent,
    LibrarianDataComponent,
    StuDataComponent,
    StuBokDetComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    CardModule,
    HttpClientModule,
    TableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

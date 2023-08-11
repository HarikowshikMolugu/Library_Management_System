import { Component } from '@angular/core';
import { ServeService } from '../serve.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent {
  login : FormGroup;
  value!: string;
  error: string|any;
  isSuccess = false;
  constructor(private service:ServeService, private router:Router ,private formbuilder:FormBuilder){
 
  
 
   this.login = this.formbuilder.group({
     name: [''],
           password: ['']
     })
 
   }
 
     submit(){
       let data={
         "name":this.login.controls['name'].value,
         "password":this.login.controls['password'].value
       }
     
      this.service.logLibPost(data).subscribe(
        (res: any) => {
          console.log(res);
          if (!res || res.failed === "Invalid credentials") {
            this.router.navigate(["/register"]); // Navigate to registration page or appropriate error page
          } else {
            this.router.navigate(["/libData"]); // Navigate to success page
            console.log(this.login.value);
          }
        },
        (error: any) => {
          console.error(error);
          this.error = 'An error occurred during login. Please try again later.';
        }
      );
     }
}

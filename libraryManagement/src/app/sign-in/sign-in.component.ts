import { Component } from '@angular/core';
import { ServeService } from '../serve.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  login : FormGroup;
  value!: string;
  isSuccess = false;
  error: string|any;
  fullName : any;
  constructor(private service:ServeService, private router:Router ,private formbuilder:FormBuilder){
 
  
 
   this.login = this.formbuilder.group({
    studentId: [''],
    password: ['']
     })
 
   }

  
   submit() {
    let data = {
      "studentId": this.login.controls['studentId'].value,
      "password": this.login.controls['password'].value
    };
  
    this.service.logStuPost(data).subscribe(
      (res: any) => {
        const rollNum = res.data.studentId;
        console.log(rollNum);
        localStorage.setItem("rn",rollNum);
        
        const name = res.data.firstName.concat(' ',res.data.lastName);
        console.log(name);
        localStorage.setItem("nam",name);
         this.fullName= localStorage.getItem("nam");
        if (res  || res.failed === "Invalid credentials") {
          this.router.navigate(["/stuData"]);
        } else {
          this.router.navigate(["/stuData"]); 
       
          console.log(this.login.value);
        }
      },
      (error: any) => {
        console.error(error);
        this.error = 'An error occurred during login. Please try again later.';
        console.log(this.error);
        
      }
    );
  }
  


     
}

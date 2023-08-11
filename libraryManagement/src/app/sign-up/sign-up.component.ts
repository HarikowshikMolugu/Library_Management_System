import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  registration : FormGroup;
 constructor(private service:ServeService, private router:Router ,private formbuilder:FormBuilder){

 

  this.registration = this.formbuilder.group({
    studentId: [' '],
    firstName: [' '],
    lastName: [' '],
      gender: [' '],
      yearOfJoin: [' '],
      passOutYear: [' '],
      branch: [' '],
      password: [' '],
      phoneNumber: [' '],
      email: [' '],
        yearOfStudy: [' '],
        universityName:[' ']
    })

  }

    submit(){
      let data={
        "studentId":this.registration.controls['studentId'].value,
        "firstName":this.registration.controls['firstName'].value,
        "lastName":this.registration.controls['lastName'].value,
        "gender":this.registration.controls['gender'].value,
        "yearOfJoin":this.registration.controls['yearOfJoin'].value,
        "passOutYear":this.registration.controls['passOutYear'].value,
        "branch":this.registration.controls['branch'].value,
        "password":this.registration.controls['password'].value,
        "phoneNumber":this.registration.controls['phoneNumber'].value,
        "email":this.registration.controls['email'].value,
        "yearOfStudy":this.registration.controls['yearOfStudy'].value,
        "universityName":this.registration.controls['universityName'].value,

      }
     this.service.regPost(data).subscribe((res:any)=>{
      console.log(res);
      if(res.Sucess == 'Sucessfully Registered...!'){
        setTimeout(() => {
          this.router.navigate(["/signIn"])
        },2000);
      }
      else{
        // const errorMessage = result.
      }
            
            console.log(this.registration.value);
            
     })
      
    }

 
}

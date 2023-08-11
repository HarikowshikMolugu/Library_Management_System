import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServeService } from '../serve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.css']
})
export class PasswordUpdateComponent {
  passwordUpdate : FormGroup;
  value!: string;
  constructor(private service:ServeService, private router:Router ,private formbuilder:FormBuilder){
 
  
 
   this.passwordUpdate = this.formbuilder.group({
    studentId: [' '],
           password: [' ']
     })
 
   }
 
     submit(){
       let data={
         "studentId":this.passwordUpdate.controls['studentId'].value,
         "password":this.passwordUpdate.controls['password'].value
       }
      this.service.passwordUpdate(data).subscribe((res:any)=>{
       console.log(res);
       if (!res || res.failed === "Invalid credentials") {
        this.router.navigate(["/register"]);
      } else {
        this.router.navigate(["/signIn"]); 
        console.log(this.passwordUpdate.value);
      }
             
             
             
      })
       
     }
}

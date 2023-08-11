import { Component } from '@angular/core';
import { ServeService } from '../serve.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-stu-data',
  templateUrl: './stu-data.component.html',
  styleUrls: ['./stu-data.component.css']
})
export class StuDataComponent {
  result: any[]=[];
  b:any;
  librarian : FormGroup;
  resultData :any;
  // fullName : any;

   fullName= localStorage.getItem("nam");
  
    
  
  
  
  
  
  constructor(private service:ServeService, private fb:FormBuilder,private getting:ServeService, private router:Router){
    this.librarian = this.fb.group({
      bookName: [' ']
       })
  
  }
  
  
 
  
  searchBook(){

    let data = {
      bookName: this.librarian.controls['bookName'].value
    };
  
    this.service.searchBooks(data).subscribe(
      (res: any) => {
        this.result = res.Data; 
        console.log(this.result);
       
      },
      (error: any) => {
        console.error(error);
      }
    );
    }
  
 
    bookDet(){
      this.router.navigate(['/stuBokDet'])
    }
  
}

import { Component } from '@angular/core';
import { ServeService } from '../serve.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stu-bok-det',
  templateUrl: './stu-bok-det.component.html',
  styleUrls: ['./stu-bok-det.component.css']
})
export class StuBokDetComponent {
  searchStudent : FormGroup;
  resultData :any;
  bookData : any;
  rollNUmber= localStorage.getItem("rn");

  constructor(private service:ServeService, private fb:FormBuilder, private router:Router){
    
       this.searchStudent = this.fb.group({
        studentId : ['']
       })
  }


  studentStu(){
    let data={
      "studentId":this.searchStudent.controls['studentId'].value
    }
    console.log(this.searchStudent.controls['studentId'].value);
          this.service.searchStu(data).subscribe((res:any)=>{
        console.log(res,'...........');
        this.resultData = res;
        if(this.rollNUmber == this.searchStudent.controls['studentId'].value){
          this.bookData = this.resultData.bookData;
        }
        else{
          console.log("error");
          
        }
     
      })
   
  }

}

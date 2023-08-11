import { Component } from '@angular/core';
import { ServeService } from '../serve.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-librarian-data',
  templateUrl: './librarian-data.component.html',
  styleUrls: ['./librarian-data.component.css']
})
export class LibrarianDataComponent {
  result: any[]=[];
b:any;
librarian : FormGroup;
searchStudent : FormGroup;
resultData :any;
bookData : any;
  borrowForm: any;
  returnForm: any;

  





constructor(private service:ServeService, private fb:FormBuilder,private getting:ServeService){
  this.librarian = this.fb.group({
    bookName: [' '],
    bookId:[' ']
     })

     this.searchStudent = this.fb.group({
      studentId : [' ']
     })
}


searchBook(){
  let data = {
    bookName: this.librarian.controls['bookName'].value,
    bookId: this.librarian.controls['bookId'].value,
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

  studentStu(){
    let data={
      "studentId":this.searchStudent.controls['studentId'].value
    }
    this.service.searchStu(data).subscribe((res:any)=>{
      console.log(res,'...........');
      this.resultData = res;
    this.bookData = this.resultData.bookData;
    })
  }

 

  bookBorrow() {
    this.borrowForm = new FormGroup({
      studentId: new FormControl('', Validators.required),
      bookId: new FormControl('', Validators.required)
    });

  }
  bookReturn(){
    this.returnForm = new FormGroup({
      studentId: new FormControl('', Validators.required),
      bookId: new FormControl('', Validators.required)
    });
  }

  // submitForm() {
  //   if (this.borrowForm.valid) {
  //     // Retrieve form values
  //     const rollNumber = this.borrowForm.value.rollNumber;
  //     const bookId = this.borrowForm.value.bookId;

  //     // Process form data
  //     console.log('Borrow form submitted');
  //     console.log('Student Roll Number:', studentId);
  //     console.log('Book ID:', bookId);

  //     // Perform additional actions (e.g., API calls, data manipulation, etc.)

  //     // Reset the form
  //     this.borrowForm.reset();
  //   }
  // }



  

  submitForm1() {
    if (this.returnForm.valid) {
      // Retrieve form values
      const rollNumber = this.returnForm.value.rollNumber;
      const bookId = this.returnForm.value.bookId;

      // Process form data
      console.log('Return form submitted');
      console.log('Student Roll Number:', rollNumber);
      console.log('Book ID:', bookId);

      // Perform additional actions (e.g., API calls, data manipulation, etc.)

      // Reset the form
      this.returnForm.reset();
    }
  }

}


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServeService {
  searchStudents(data: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }



  regPost(data:any){
   return this.http.post('http://172.17.15.214:8083/studentRegistration',data)
  }

  logStuPost(data:any){
    return this.http.post('http://172.17.15.214:8083/studentLogin',data)
  }

  logLibPost(data:any){
    return this.http.post('http://172.17.15.214:8083/libLog',data)
  }

  passwordUpdate(data:any){
    return this.http.put('http://172.17.15.214:8083/passwordUpdate',data)
  }
  

  searchBooks(data:any){
    return this.http.post('http://172.17.15.214:8083/getBookByField',data)
  }


  searchStu(data:any){
    return this.http.post('http://172.17.15.214:8083/studentTransData',data)
  }

  bookBorrow(data:any){
    return this.http.post('http://172.17.15.214:8083/bookBorrow',data)
  }
}

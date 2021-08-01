import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Jobpost } from './jobpost';
import { Admin } from './admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  selectAdmin:Admin = {
    email:'',
    password:''
  };
  private jobpost:Jobpost;
  private baseUri:string= "http://localhost:3000/admin/";
  private baseuriprofile:string = "http://localhost:3000/adminprofile/"
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }

  postAdmin(admin:Admin){
    return this.http.post(this.baseuriprofile+'/register',admin,{headers:this.headers});
  }

  jobsposts;

  createjobpost(jobpost:Jobpost){
  return this.http.post(this.baseUri+'/jobpost',jobpost,{headers:this.headers});
  }

  getjobpost(){
    return this.http.get(this.baseUri+'/all',{headers:this.headers});
  }

  updatejobpost(jobpost:Jobpost){
    return this.http.put(this.baseUri+'/update',jobpost,{headers:this.headers});
    }

  deletejobpost(id:string){
      return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers});
    }

    setter(jobpost:Jobpost){
      this.jobpost=jobpost;
    }

    getter(){
      return this.jobpost;
    }

}

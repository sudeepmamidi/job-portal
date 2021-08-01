import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from 'src/app/shared/admin.model';


import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers : [AdminService]
})
export class SignupComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(private adminService:AdminService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    this.adminService.postAdmin(form.value).subscribe(
      res=>{
        this.showSucessMessage=true;
        setTimeout(()=> this.showSucessMessage=false,4000);
        this.resetForm(form);
      },
      err=>{
        if(err.status === 422){
          this.serverErrorMessages = err.error.join('<br>');
        }
        else{
          this.serverErrorMessages = "something went wrong";
        }
      }
    );
  }

  resetForm(form: NgForm) {
    this.adminService.selectAdmin = {
      email: '',
      password: '',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}

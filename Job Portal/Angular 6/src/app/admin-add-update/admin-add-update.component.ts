import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import { Jobpost } from '../shared/jobpost';

@Component({
  selector: 'app-admin-add-update',
  templateUrl: './admin-add-update.component.html',
  styleUrls: ['./admin-add-update.component.css']
})
export class AdminAddUpdateComponent implements OnInit {
  private jobpost:Jobpost;
  constructor(private adminservice:AdminService,private router:Router) {}

  ngOnInit() {
    this.jobpost = this.adminservice.getter();
  }
  createOrUpdate(){
    if(this.jobpost._id==undefined){
    this.adminservice.createjobpost(this.jobpost).subscribe(
      data=>{
          console.log(data);
          this.router.navigate(['/adminlist']);
      },
      error=>{
        console.log(error);
      }
    )
  }else{
    this.adminservice.updatejobpost(this.jobpost).subscribe(
      data=>{
          console.log(data);
          this.router.navigate(['/adminlist']);
      },
      error=>{
        console.log(error);
      }
    )
  }
  }
}

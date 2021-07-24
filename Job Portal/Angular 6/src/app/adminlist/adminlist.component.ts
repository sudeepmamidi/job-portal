import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { Router } from '@angular/router';

import { Jobpost } from '../shared/jobpost';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {
  private jobposts:Jobpost[];

  constructor(private _adminService:AdminService,private router:Router) { }

  ngOnInit() {
    this.getjobposts();
  }
  getjobposts(){
    this._adminService.getjobpost().subscribe((res:any)=>{
      this.jobposts=res
    })
  }


  doDelete(jobpost){
    this._adminService.deletejobpost(jobpost._id).subscribe(
      data=>{
        this.jobposts.splice(this.jobposts.indexOf(jobpost),1);
      },
      error=>{
        
      }
    )
  }
  doUpdate(jobpost){
    this._adminService.setter(jobpost);
    this.router.navigate(['/adminaddupdate']);

  }

}

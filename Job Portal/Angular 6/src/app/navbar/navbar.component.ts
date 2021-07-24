import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AdminService } from '../shared/admin.service';
import { Jobpost } from '../shared/jobpost';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private adminservice:AdminService) { }

  ngOnInit() {
  }

  newjobpost($event:any){
    event.preventDefault();
    this.adminservice.setter(new Jobpost());
    this.router.navigate(['/adminaddupdate']);
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navuser',
  templateUrl: './navuser.component.html',
  styleUrls: ['./navuser.component.css']
})
export class NavuserComponent implements OnInit {

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}

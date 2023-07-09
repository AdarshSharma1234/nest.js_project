import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any
  password:any

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.userService.login(this.username, this.password).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }

}

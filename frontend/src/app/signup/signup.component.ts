import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username:any
  password: any

  constructor(private userService : UserService, private router: Router) { }

  ngOnInit(): void {
  }

  signup(): void {
    this.userService.signUp(this.username, this.password).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

}

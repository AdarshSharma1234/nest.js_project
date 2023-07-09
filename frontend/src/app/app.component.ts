import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(private userService: UserService) {}

  logout(): void {
    // Perform logout actions (e.g., clearing tokens, etc.)
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userEmail = null;
  selectedBackground = 'none-background';

  setUserEmail(userEmail) {
    this.userEmail = userEmail;
  }
}

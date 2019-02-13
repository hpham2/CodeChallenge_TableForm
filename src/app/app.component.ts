import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sms-code-challenge';
  userEmail = null;

  setUserEmail(userEmail) {
    this.userEmail = userEmail;
    console.log(this.userEmail);
}
}

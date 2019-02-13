import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  @Input() userEmail;

  disableButton = true;

  constructor() { }

  ngOnInit() {
  }

  checkboxChecked() {
    this.disableButton = !this.disableButton
  }

  buttonClick() {
    if (this.userEmail != null) {
      alert("Your email is: " + this.userEmail);
    } else {
      alert("Your email is invalid ");
    }
  }
}

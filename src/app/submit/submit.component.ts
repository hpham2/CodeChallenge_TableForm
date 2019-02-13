import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  @Input() userEmail;

  /**
   * @variable
   */
  hiddenClassWrongEmail = "unshow";
  hiddenClassRightEmail = "unshow";
  disableButton = true;

  constructor() { }

  ngOnInit() {
  }

  /** when checkbox is checked */
  checkboxChecked() {
    this.disableButton = !this.disableButton
  }

  /** when button is clicked */
  buttonClick() {
    if (this.userEmail != null) {
      alert("Your email is: " + this.userEmail);
      this.hiddenClassWrongEmail = "unshow";
      this.hiddenClassRightEmail = null;
    } else {
      this.hiddenClassRightEmail = "unshow";
      this.hiddenClassWrongEmail = null;
    }
  }
}

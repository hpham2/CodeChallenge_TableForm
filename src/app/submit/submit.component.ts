import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  
  disableButton = true;

  constructor() { }

  ngOnInit() {
  }

  checkboxChecked() {
    this.disableButton = !this.disableButton
  }

  buttonClick() {
    alert("Hello! I am an alert box!!");
  }
}

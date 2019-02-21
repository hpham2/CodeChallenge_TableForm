import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent {
  @Input() userEmail;

  /**
   * @variable
   */
  hiddenClassWrongEmail = "unshow";
  hiddenClassRightEmail = "unshow";
  disableButton = true;

  constructor(public dialog: MatDialog) { }
  
  /** when checkbox is checked */
  checkboxChecked() {
    this.disableButton = !this.disableButton
  }

  /** when button is clicked */
  openDialog(): void {
    if (this.userEmail != null) {
      // alert("Your email is: " + this.userEmail);
      this.hiddenClassWrongEmail = "unshow";
      this.hiddenClassRightEmail = null;

      const dialogRef = this.dialog.open(AlertDialog, {
        width: '450px',
        data: {email: this.userEmail}
      });

    } else {
      this.hiddenClassRightEmail = "unshow";
      this.hiddenClassWrongEmail = null;
    }
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'alert-dialog.html',
})
export class AlertDialog {
  constructor(
    public dialogRef: MatDialogRef<AlertDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
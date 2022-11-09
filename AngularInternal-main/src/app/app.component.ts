import { Component,ViewEncapsulation } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'LtiInternal';
  //  constructor(private _snackBar: MatSnackBar) {}

  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action);
  // }
}

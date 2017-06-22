import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { AboutComponent } from './../about/about.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Near Earth Object Web Service';

  constructor(private dialog: MdDialog) {}

  about(): void {
    let dialogRef = this.dialog.open(AboutComponent);
  }
}

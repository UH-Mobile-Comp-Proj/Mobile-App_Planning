import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  variableheight = 225;
  variablewidth = 110;
  constructor() {}

  image1click() {
    if (this.variableheight === 225) {
    this.variableheight = 900;
    this.variablewidth = 440;
    } else {
      this.variableheight = 225;
      this.variablewidth = 110;
    }
  }
}

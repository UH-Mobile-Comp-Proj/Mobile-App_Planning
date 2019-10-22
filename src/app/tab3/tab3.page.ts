import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  variableheight1 = 225;
  variablewidth1 = 110;
  variableheight2 = 225;
  variablewidth2 = 110;
  variableheight3 = 225;
  variablewidth3 = 110;
  variableheight4 = 225;
  variablewidth4 = 110;
  variableheight5 = 225;
  variablewidth5 = 110;
  variableheight6 = 225;
  variablewidth6 = 110;
  variableheight7 = 225;
  variablewidth7 = 110;
  constructor() {}

  image1click() {
    if (this.variableheight1 === 225) {
    this.variableheight1 = 900;
    this.variablewidth1 = 440;
    } else {
      this.variableheight1 = 225;
      this.variablewidth1 = 110;
    }
  }
  image2click() {
    if (this.variableheight2 === 225) {
    this.variableheight2 = 900;
    this.variablewidth2 = 440;
    } else {
      this.variableheight2 = 225;
      this.variablewidth2 = 110;
    }
  }
  image3click() {
    if (this.variableheight3 === 225) {
    this.variableheight3 = 900;
    this.variablewidth3 = 440;
    } else {
      this.variableheight3 = 225;
      this.variablewidth3 = 110;
    }
  }
  image4click() {
    if (this.variableheight4 === 225) {
    this.variableheight4 = 900;
    this.variablewidth4 = 440;
    } else {
      this.variableheight4 = 225;
      this.variablewidth4 = 110;
    }
  }
  image5click() {
    if (this.variableheight5 === 225) {
    this.variableheight5 = 900;
    this.variablewidth5 = 440;
    } else {
      this.variableheight5 = 225;
      this.variablewidth5 = 110;
    }
  }
  image6click() {
    if (this.variableheight6 === 225) {
    this.variableheight6 = 900;
    this.variablewidth6 = 440;
    } else {
      this.variableheight6 = 225;
      this.variablewidth6 = 110;
    }
  }
  image7click() {
    if (this.variableheight7 === 225) {
    this.variableheight7 = 900;
    this.variablewidth7 = 440;
    } else {
      this.variableheight7 = 225;
      this.variablewidth7 = 110;
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  smallheight = 108.3;
  smallwidth = 68.9;
  largeheight = 433.2;
  largewidth = 275.6;

  initialnotes1 = 'Notes for image 1';
  notes1 = 'Notes for image 1';
  initialnotes2 = 'Notes for image 2';
  notes2 = 'Notes for image 2';
  initialnotes3 = 'Notes for image 3';
  notes3 = 'Notes for image 3';
  initialnotes4 = 'Notes for image 4';
  notes4 = 'Notes for image 4';
  initialnotes5 = 'Notes for image 5';
  notes5 = 'Notes for image 5';
  initialnotes6 = 'Notes for image 6';
  notes6 = 'Notes for image 6';
  initialnotes7 = 'Notes for image 7';
  notes7 = 'Notes for image 7';

  variableheight1 = this.smallheight;
  variablewidth1 = this.smallwidth;
  variableheight2 = this.smallheight;
  variablewidth2 = this.smallwidth;
  variableheight3 = this.smallheight;
  variablewidth3 = this.smallwidth;
  variableheight4 = this.smallheight;
  variablewidth4 = this.smallwidth;
  variableheight5 = this.smallheight;
  variablewidth5 = this.smallwidth;
  variableheight6 = this.smallheight;
  variablewidth6 = this.smallwidth;
  variableheight7 = this.smallheight;
  variablewidth7 = this.smallwidth;
  constructor() {}

  image1click() {
    if (this.variableheight1 === this.smallheight) {
    this.variableheight1 = this.largeheight;
    this.variablewidth1 = this.largewidth;
    this.notes1 = '';
    } else {
      this.variableheight1 = this.smallheight;
      this.variablewidth1 = this.smallwidth;
      this.notes1 = this.initialnotes1;
    }
  }
  image2click() {
    if (this.variableheight2 === this.smallheight) {
    this.variableheight2 = this.largeheight;
    this.variablewidth2 = this.largewidth;
    this.notes2 = '';
    } else {
      this.variableheight2 = this.smallheight;
      this.variablewidth2 = this.smallwidth;
      this.notes2 = this.initialnotes2;
    }
  }
  image3click() {
    if (this.variableheight3 === this.smallheight) {
    this.variableheight3 = this.largeheight;
    this.variablewidth3 = this.largewidth;
    this.notes3 = '';
    } else {
      this.variableheight3 = this.smallheight;
      this.variablewidth3 = this.smallwidth;
      this.notes3 = this.initialnotes3;
    }
  }
  image4click() {
    if (this.variableheight4 === this.smallheight) {
    this.variableheight4 = this.largeheight;
    this.variablewidth4 = this.largewidth;
    this.notes4 = '';
    } else {
      this.variableheight4 = this.smallheight;
      this.variablewidth4 = this.smallwidth;
      this.notes4 = this.initialnotes4;
    }
  }
  image5click() {
    if (this.variableheight5 === this.smallheight) {
    this.variableheight5 = this.largeheight;
    this.variablewidth5 = this.largewidth;
    this.notes5 = '';
    } else {
      this.variableheight5 = this.smallheight;
      this.variablewidth5 = this.smallwidth;
      this.notes5 = this.initialnotes5;
    }
  }
  image6click() {
    if (this.variableheight6 === this.smallheight) {
    this.variableheight6 = this.largeheight;
    this.variablewidth6 = this.largewidth;
    this.notes6 = '';
    } else {
      this.variableheight6 = this.smallheight;
      this.variablewidth6 = this.smallwidth;
      this.notes6 = this.initialnotes6;
    }
  }
  image7click() {
    if (this.variableheight7 === this.smallheight) {
    this.variableheight7 = this.largeheight;
    this.variablewidth7 = this.largewidth;
    this.notes7 = '';
    } else {
      this.variableheight7 = this.smallheight;
      this.variablewidth7 = this.smallwidth;
      this.notes7 = this.initialnotes7;
    }
  }
}

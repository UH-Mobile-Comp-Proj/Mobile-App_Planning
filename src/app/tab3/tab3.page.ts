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

  // tslint:disable-next-line: max-line-length
  initialnotes1 = 'This is a fairly standard log in screen with the options you might expected to see in an app i.e. forgotten password option and user registration. There is also a separate option for event organisers to register in order to add events.';
  notes1 = this.initialnotes1;
  // tslint:disable-next-line: max-line-length
  initialnotes2 = 'This is the screen that gathers information on the user.  Another information needs to be gathered to build a profile of the user to allow the app to finds suitable friends an events.  It is envisaged the information on location, age and interests would be selected from pull-down lists to restrict selection so the matching algorithm can work.';
  notes2 = this.initialnotes2;
  // tslint:disable-next-line: max-line-length
  initialnotes3 = 'This is the screen that an event organiser would use to add an event.  As for user information the information will be selected from pull-down lists.';
  notes3 = this.initialnotes3;
  // tslint:disable-next-line: max-line-length
  initialnotes4 = 'This would be a map view of events with different icons for different types of events.  The user can filter on date ranges and activities types.  It is envisaged that more information on events would be available if you click on an event icon.  It would also sure information on people you have said they are going to an event so you can invite them to meet up.';
  notes4 = this.initialnotes4;
  // tslint:disable-next-line: max-line-length
  initialnotes5 = 'This is the screen that shows your list of friends and gives the option of messaging them or arranging to go to an event with them.  It also gives the option to end a connection.';
  notes5 = this.initialnotes5;
  // tslint:disable-next-line: max-line-length
  initialnotes6 = 'This is the screen that shows the usual chat function so you can arrange to meet up with features that would allow you to report an inappropriate messaging.';
  notes6 =  this.initialnotes6;
  // tslint:disable-next-line: max-line-length
  initialnotes7 = 'This shows all the invites you have received to an event, with the option to find more information, accept or decline.  If you accept then you would then be able to message the person to arrange to meet up.';
  notes7 =  this.initialnotes7;

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

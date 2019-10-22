import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  usertextvalue1 = 1;
  value1 = 0;

  usertextvalue2 = 1;
  value2 = 0;

  constructor() {}

  image_user_click()  {
    if (this.usertextvalue1 === 1){
      this.value1 = 1; this.usertextvalue1 = 2; } else if (this.usertextvalue1 === 2){
         this.value1 = 0; this.usertextvalue1 = 1;}
  }

  image_event_click() {
    if (this.usertextvalue2 === 1){
      this.value2 = 1; this.usertextvalue2 = 2;} else if (this.usertextvalue2 === 2){
         this.value2 = 0; this.usertextvalue2 = 1;}
  }
}


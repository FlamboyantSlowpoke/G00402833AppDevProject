import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-snake-guide',
  templateUrl: './snake-guide.page.html',
  styleUrls: ['./snake-guide.page.scss'],
})
export class SnakeGuidePage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {

  }

  //methods
  async GOSnakeVideo() {          //when  called, takes user to youtube.com using the browser extension
    await Browser.open({url: 'https://youtu.be/yZtXmFWQLjw'});
  }

  GOHome() {                      //when called, takes user back to home menu of app
      this.navCtrl.navigateRoot('/home');
  }
}

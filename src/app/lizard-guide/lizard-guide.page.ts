import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lizard-guide',
  templateUrl: './lizard-guide.page.html',
  styleUrls: ['./lizard-guide.page.scss'],
})
export class LizardGuidePage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
    
  }

  //methods
  async GOLizardVideo() {          //when  called, takes user to youtube.com using the browser extension
    await Browser.open({url: 'https://www.youtube.com/watch?v=eZSgMcZPs6w&pp=ygUPYmVnaW5uZXIgbGl6YXJk'});
  }

  GOHome() {                      //when called, takes user back to home menu of app
      this.navCtrl.navigateRoot('/home');
  }
}

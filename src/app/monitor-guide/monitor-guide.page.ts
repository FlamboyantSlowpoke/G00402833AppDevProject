import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-monitor-guide',
  templateUrl: './monitor-guide.page.html',
  styleUrls: ['./monitor-guide.page.scss'],
})
export class MonitorGuidePage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {

  }

  //methods
  async GOMonitorVideo() {          //when  called, takes user to youtube.com using the browser extension
      await Browser.open({url: 'https://www.youtube.com/watch?v=jUOsqb1Xdzs&pp=ygUXYmVnaW5uZXIgbW9uaXRvciBsaXphcmQ%3D'});
  }

  GOHome() {                      //when called, takes user back to home menu of app
      this.navCtrl.navigateRoot('/home');
  }
}

import { Component, OnInit, QueryList } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-reptile-survey',
  templateUrl: './reptile-survey.page.html',
  styleUrls: ['./reptile-survey.page.scss'],
})

export class ReptileSurveyPage implements OnInit {

  reptileChoice: string = "0";
  firstPet: string = "true";
  petNum: string = "0";
  petName: string = "";

  constructor(private navCtrl:NavController,  private str:Storage) {}

  ngOnInit() {
    
  }
  //saves name and pet num variable for later use variable for use on later sheet
  async onSave() {
    await this.str.create();
    await this.str.set(this.petName, this.petNum);
  }

  //navigates to info pages when called
GOsnakeGuide() {
  this.navCtrl.navigateForward('/snake-guide')
}

GOlizardGuide() {
  this.navCtrl.navigateForward('/lizard-guide');
}

GOmonitorGuide() {
  this.navCtrl.navigateForward('/monitor-guide');
}

  //when button is clicked, calculates all info and takes user to corresponding page
  runResults() {

   


    switch(this.firstPet)
    {
      case "true":
        this.petNum = "1";
        break;

      case "false":
        this.petNum= "0";
        break;
    }
  



    switch(parseInt(this.reptileChoice))
    {
      case 1:
        this.GOsnakeGuide();
        break;
      case 2:
        this.GOlizardGuide();
        break;
      case 3:
        this.GOmonitorGuide();
        break;
      default:
        console.log("FAILURE");
        break;
    }
  }
}

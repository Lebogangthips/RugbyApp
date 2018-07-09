import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { ScoreboardPage } from '../scoreboard/scoreboard';

import { Teams } from '../../app/object';


import arr from '../../app/array';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Home;
  Away;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  Start(){
    

  if(this.Home != undefined  &&  this.Away != undefined){

    this.navCtrl.push(ScoreboardPage);

    
    arr[0] = this.Home;
    arr[1] = this.Away;

    const confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'The home team is  ' + this.Home + ' and the away team is ' + this.Away ,
      buttons: [
       
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  
  else{ 
    const confirm = this.alertCtrl.create({
      title: 'Opps!',
      message: 'Please eneter the "Home" team name and the "Away" team name.',
      buttons: [
      
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  
    
 }
}







import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import arr from '../../app/array';

import { HomePage } from '../../pages/home/home';


/**
 * Generated class for the ScoreboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scoreboard',
  templateUrl: 'scoreboard.html',
})
export class ScoreboardPage {

  Lebo=arr;
  Team;
  TeamA = arr[0];
  TeamB = arr[1];
  Away: number  = 0;
  Home: number =0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreboardPage');

    console.log(this.Lebo);
  }

  Check(s){
    this.Team=s;

    console.log("L")


  }


  Checks(s){
    this.Team=s;

    console.log("L")


  }




  TBtn(){

    
    
    if(this.Team == 'TeamA') {
      this.Home += 5;


    }

    else{
  this.Away += 5;
    }



  }

  UTBtn(){

    if(this.Team == 'TeamA') {
      this.Home -= 5;

      if(this.Home <0){

        this.Home =0;


        
      }


    }

    else{
      this.Away -= 5;

      if(this.Away < 0){

        this.Away =0;



        }
      }
  }



  PBtn(){
    console.log("ddiuh");

    if(this.Team == 'TeamA') {
      this.Home += 3;


    }

    else{
  this.Away += 3;
    }


  }

  PTBtn(){

    console.log("ddiuh")

    if(this.Team == 'TeamA') {
      this.Home -= 3;

      if(this.Home<0){
      this.Home=0;

      }

    }

    else{
      this.Away -= 3;

      if(this.Away <0){
       this.Away=0


      }


        }


  }



  CBtn(){

    if(this.Team == 'TeamA') {
      this.Home += 2;


    }

    else{
  this.Away += 2;
    }

  }

  CTBtn(){

    if(this.Team == 'TeamA') {
      this.Home -= 2;

      if(this.Home <0){
     this.Home=0;

      }


    }

    else{
      this.Away -= 2;
    
      if(this.Away <0){
        this.Away=0;



      }


        }

  }


  RESET(){
    this.Home=0;
    this.Away=0;
  
    this.navCtrl.push(HomePage);
  
  
  
  }


}

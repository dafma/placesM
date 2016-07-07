import { Component } from '@angular/core';
import { NavController, Page, NavParams, Slides } from 'ionic-angular';


/*
  Generated class for the DetailItemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/detail-item/detail-item.html',
})
export class DetailItemPage {
  selectedItem: any;
  mySlideOptions = {
    initialSlide: 1,
    loop: true
  };

  

  constructor(private nav: NavController, navParams : NavParams) {
    this.selectedItem = navParams.get('item');
  }

}

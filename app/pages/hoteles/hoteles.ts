import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DetailItemPage} from '../detail-item/detail-item';

/*
  Generated class for the HotelesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/hoteles/hoteles.html',
})
export class HotelesPage {

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note:string, icon:string}>;

  constructor(private nav: NavController, navParams:NavParams) {
    this.selectedItem = navParams.get('item');
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane','american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 12; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

  }
  itemTapped(event, item) {
    this.nav.push(DetailItemPage, {
      item: item
    });
  }
}

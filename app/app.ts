import {Component, Type, ViewChild} from '@angular/core';
import {App, Platform, ionicBootstrap,  MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';


import {ContactPage} from './pages/contact/contact';
import {AboutPage} from './pages/about/about';


@Component({
 templateUrl: 'build/app.html',
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  private rootPage:any = ContactPage ;
  private pages: any;

  constructor(private menu: MenuController, private platform:Platform) {

    this.pages = [
      {title: 'Contact', component:ContactPage},
      {title:'About', component:AboutPage},
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });

  }


  openPage(page){
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
    }
}

ionicBootstrap(MyApp)

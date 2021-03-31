import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit: home");
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter: home");
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter: home");
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave: home");
  }

  ionViewDidLeave() {
    console.log("ionViewDidLeave: home");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy: home");
  }

}

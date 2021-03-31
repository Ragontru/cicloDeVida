import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.page.html',
  styleUrls: ['./pagina4.page.scss'],
})
export class Pagina4Page implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit: pagina1");
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter: pagina4");
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter: pagina4");
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave: pagina4");
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave: pagina4");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy: pagina4");
  }

}

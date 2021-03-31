import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit: pagina3");
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter: pagina3");
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter: pagina3");
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave: pagina3");
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave: pagina3");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy: pagina3");
  }

}

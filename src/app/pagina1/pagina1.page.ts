import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit: pagina1");
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter: pagina1");
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter: pagina1");
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave: pagina1");
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave: pagina1");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy: pagina1");
  }

}

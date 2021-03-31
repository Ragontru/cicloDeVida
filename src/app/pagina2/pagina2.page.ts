import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit: pagina2");
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter: pagina2");
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter: pagina2");
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave: pagina2");
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave: pagina2");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy: pagina2");
  }

}

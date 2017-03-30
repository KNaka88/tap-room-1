import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template:`
  <h1>Hello</h1>
  <keg-list  [childKegList]="masterKegList" (clickSender)="editKeg($event)" ></keg-list>
  <edit-keg [childSelectedKeg]="selectedKeg" (saveButtonClickedSender)= "finishEdit()"></edit-keg>
  <new-keg (newKegSender)="addKeg($event)"></new-keg>

  `
})


export class AppComponent{
  masterKegList: Keg[] = [
    new Keg('Asahi', 4, '10', "http://www.globalfoods.co.uk/wp-content/uploads/2017/03/10880.jpg"),
    new Keg('Sapporo', 3, '8', "http://i.ebayimg.com/images/i/111813146196-0-1/s-l1000.jpg"),
    new Keg('Kirin', 3.5, '9', "http://www.sportssupport.com.au/image/cache/data/kegs/532523-600x600.png")
  ];

  addKeg(newKeg: Keg){
    console.log("new keg");
    console.log(newKeg);
    this.masterKegList.push(newKeg);
  }

  selectedKeg: Keg = null;

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }

  finishEdit(){
    this.selectedKeg= null;
  }



}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template:`

    <select (change)="onChange($event.target.value)">
      <option value="allKegs" selected="selected">All Kegs</option>
      <option value="lessthan10">Less than 10</option>
    </select>
    <ul>
      <div class='row'>
        <div [style.background-color]="addColor(keg)" *ngFor='let keg of childKegList | checkVolume:filterByVolume' class='col-md-4 product'>
          <p>Brand: {{keg.brand}}</p>
          <p>Price:  &#36;{{keg.price}}</p>
          <p>Alcohol Content: {{keg.alcohol}}&#37;</p>
          <p>Volume: {{keg.pints}} pints <button (click)="buyPint(keg)">Buy a Pint</button></p>
          <div class='image-section'>
            <img class='keg-image' src={{keg.image}} alt={{keg.brand}}><br>
            <button (click)="editKeg(keg)">Edit</button>

          </div>
        </div>
      </div>
    </ul>
  `
})


export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  filterByVolume: string = "allKegs";

  editKeg(keg: Keg){
    this.clickSender.emit(keg);
  }

  buyPint(keg: Keg){
    if(keg.pints != 0){
      keg.pints = keg.pints -1;
    }
  }

  onChange(optionFromMenu){
    this.filterByVolume= optionFromMenu;
    console.log(this.filterByVolume);
  }

  addColor(keg){
    if(keg.price >= 4){
      return "red";
    }
  }

}

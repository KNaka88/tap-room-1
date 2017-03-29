import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template:`
    <ul>
      <div class='row'>
        <div *ngFor='let keg of childKegList' class='col-md-4 product'>
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

  editKeg(keg: Keg){
    this.clickSender.emit(keg);
  }

  buyPint(keg: Keg){
    keg.pints = keg.pints -1;
  }
}

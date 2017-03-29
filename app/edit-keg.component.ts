import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template:`
  <div *ngIf="childSelectedKeg">
    <h2>{{childSelectedKeg.brand}}</h2>
    <h2>Edit new information:</h2>
    <label>New Brand Name</label>
    <input [(ngModel)]="childSelectedKeg.brand">
    <label>New price</label>
    <input [(ngModel)]="childSelectedKeg.price">
    <label>New alcohol content</label>
    <input [(ngModel)]="childSelectedKeg.alcohol">
    <label>New image</label>
    <input [(ngModel)]="childSelectedKeg.image">
    <button (click)= "saveButtonClicked()">Save</button>
  </div>

  `
})


export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() saveButtonClickedSender = new EventEmitter();
  saveButtonClicked(){
    this.saveButtonClickedSender.emit();
  }
}

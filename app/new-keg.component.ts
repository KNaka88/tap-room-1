import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template:`
  <h2>New Keg</h2>
  <label>Enter the brand:</label>
  <input #newBrand>
  <label>Enter the price:</label>
  <input #newPrice>
  <label>Enter the alcohol content:</label>
  <input #newAlcohol>
  <label>Enter an image:</label>
  <input #newImage>
  <button (click)="submitForm(newBrand.value, newPrice.value, newAlcohol.value, newImage.value);">Submit</button>
  `
})


export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(brand: string, price: string, alcohol: string, image: string){
    var newKeg: Keg = new Keg(brand, price, alcohol, image);
    this.newKegSender.emit(newKeg);

  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  fibonacci = ['1', '2', '3', '5', '8', '13'];
  dogs = ['Christmas', 'Ripley', 'German Shepherd', 'Juno', 'Great Dane'];
  animals = ['rabbit', 'dog', 'deer', 'tiger', 'elephant', 'blue whale'];
  selection = 'sizes';
  options = ['sizes', 'fibonacci'];

  constructor() { }

  cardValues() {
    if (this.selection == 'sizes') {
      return this.sizes;
    } else {
      return this.fibonacci;
    }
  }
}

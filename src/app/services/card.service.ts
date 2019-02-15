import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  sizes = [{id:'XS', img:null}, {id:'S', img:null}, {id:'M', img:null},
          {id:'L', img:null}, {id:'XL', img:null}, {id:'XXL', img:null}];
  fibonacci = [{id:'1', img:null}, {id:'2', img:null}, {id:'3', img:null},
              {id:'5', img:null}, {id:'8', img:null}, {id:'13', img:null}];
  dogs = [{id:'1', img:'christmas.jpg'}, {id:'2', img:'otis.jpg'}, {id:'3', img:'ripley.jpg'},
          {id:'4', img:'bella.jpg'}, {id:'5', img:'juno.jpg'}, {id:'6', img:'caliDog.jpg'}];
  animals = ['rabbit', 'dog', 'deer', 'llama', 'bison', 'giraffe'];
  selection = '';
  options = ['sizes', 'fibonacci', 'dogs'];

  constructor(private storage: Storage) {

  }

  setSelection(selection) {
    this.storage.set('deckType', selection);
    this.selection = selection;
  }

  cardValues() {
    if (this.selection == 'sizes') {
      return this.sizes;
    } else if (this.selection == 'dogs'){
      return this.dogs;
    } else {
      return this.fibonacci;
    }
  }
}

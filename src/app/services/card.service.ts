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
  dogs = [{id:'1', img:'dogs/christmas.jpg'}, {id:'2', img:'dogs/otis.jpg'},
        {id:'3', img:'dogs/ripley.jpg'}, {id:'4', img:'dogs/bella.jpg'},
        {id:'5', img:'dogs/juno.jpg'}, {id:'6', img:'dogs/caliDog.jpg'}];
  animals = [{id: '1', img:'animals/a1.jpg'}, {id:'2', img:'animals/a2.jpg'},
          {id:'3', img:'animals/a3.jpg'}, {id:'4', img:'animals/a4.jpg'},
          {id:'5', img:'animals/a5.jpg'}, {id:'6', img:'animals/a6.jpg'}];
  selection = '';
  options = ['sizes', 'fibonacci', 'dogs', 'animals'];

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
    } else if (this.selection == 'fibonacci') {
      return this.fibonacci;
    } else {
      return this.animals;
    }
  }
}

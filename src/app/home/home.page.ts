import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cards = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  onSelected(card) {
    console.log(card);
  }
}

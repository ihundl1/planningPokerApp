import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectedCardPage } from '../selected-card/selected-card.page';
import { CardService } from '../services/card.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cards = this.cardService.cardValues();

  constructor(public modalCtrl: ModalController,
              private cardService: CardService) {}

  async onSelected(card) {
    const modal = await this.modalCtrl.create({
      component: SelectedCardPage,
      componentProps: { value: card }
    });
    return await modal.present();
  }
}

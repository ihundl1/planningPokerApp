import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-easter-egg',
  templateUrl: './easter-egg.page.html',
  styleUrls: ['./easter-egg.page.scss'],
})
export class EasterEggPage implements OnInit {
  pics = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
          '14', '15']
          
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['home']);
  }

}

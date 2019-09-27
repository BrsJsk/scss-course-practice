import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  template: `
  <div class="container" [ngClass]="{'right-nav': isRightNav}">
    <div class="sidebar">
      <button (click)="isRightNav = !isRightNav">Switch</button>
    </div>

    <div class="main">
      Main
    </div>
  </div>
  `,
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
  public isRightNav: boolean;
  constructor() { }

  ngOnInit() {
  }

}
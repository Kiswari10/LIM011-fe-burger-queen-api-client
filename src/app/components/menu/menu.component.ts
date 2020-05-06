import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  breakfast:boolean = true
  activeBreakfast: boolean = true
  lunchDinner: boolean = false
  activeLunchDinner : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  showBreakfast() {
    this.breakfast = true,
    this.activeBreakfast = true
    this.lunchDinner = false
    this.activeLunchDinner = false
  }
  showLunchDinner() {
    this.breakfast = false,
    this.activeBreakfast = false
    this.lunchDinner = true
    this.activeLunchDinner = true
  }

}

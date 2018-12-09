import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMouseOverCompany: any = false;
  constructor() { }
  ngOnInit() {
    this.isMouseOverCompany = false;
  }
  mouseLeaveCompany() {
    this.isMouseOverCompany = false;

  }

  mouseEnterCompany() {
    this.isMouseOverCompany = true;
  }

}

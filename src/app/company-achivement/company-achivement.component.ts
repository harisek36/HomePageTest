import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-achivement',
  templateUrl: './company-achivement.component.html',
  styleUrls: ['./company-achivement.component.css']
})
export class CompanyAchivementComponent implements OnInit {

  tiles: any[] = [
    {text: 'One', cols: 1, rows: 1, title: 'Thought Leadership', content: 'At Miracle we believe in execution at the speed of thought along with the power of leadership which helps us drive forward',  url: 'https://d2b8lqy494c4mo.cloudfront.net/mss/images/principles/thought-leadership.png'},
    {text: 'Two', cols: 1, rows: 1, title: 'Technical Excellence', content: 'Miracle\'s core strength is its Technical Excellence which helps us to give our customers the highest possible business value',  url: 'https://d2b8lqy494c4mo.cloudfront.net/mss/images/principles/technical-excellence.png'},
    {text: 'Three', cols: 1, rows: 1, title: 'Industry Expertise', content: 'Nobody knows the IT landscape and Industry verticals as we do at Miracle and this helps us to understand your problems much better', url: 'https://d2b8lqy494c4mo.cloudfront.net/mss/images/principles/industry-expertise.png'},
    {text: 'Four', cols: 1, rows: 1, title: 'Global Delivery', content: 'Through our multiple Global Development Centers we provide unprecendented, quality and low cost services for our customers',  url: 'https://d2b8lqy494c4mo.cloudfront.net/mss/images/principles/global-delivery.png'},
  ];
  constructor() { }

  ngOnInit() {
  }
}

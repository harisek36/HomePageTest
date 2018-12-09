import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.css']
})
export class CompanyOverviewComponent implements OnInit {

  tiles: any[] = [
    {text: 'Irrespective of the size of the enterprise, connectivity plays a vital role in defining how connected your enterprise is. Over the past 20 years our teams have helped numerous customers transition their IT architecture to enable an agile and on-demand enterprise. Through messaging and connectivity the enterprise becomes much more flexible to changes in a demanding market place while also ensuring quicker time-to-market and reduced support development costs. Contact us today to learn more about how a SOA-based approach will help you become the connected enterprise (or) how APIs can help open a whole new world of possibilities for your developers.\n' +
      '\n', cols: 1, rows: 1, color: 'lightblue', title: 'Power of Connectivity', url: ''},
    {text: 'At Miracle we provide a solid foundation for young learners to build their careers and shape their future. Being a tech savvy company, our encouraging and energetic environment helps young talent to blossom and grow. Join us today to make your mark on the IT field with new disruptive innovations.', cols: 1, rows: 2, color: 'lightpink', title: 'The Job that you will Love', url: 'https://d2b8lqy494c4mo.cloudfront.net/mss/images/career/career.png'},
    {text: 'Through our strategic partnership with Mulesoft, we enable to offer innovative solutions to our customers while creating continuous transformation. Together, we deliver top-line solutions for the most challenging complications across SOA, SaaS, and APIs in an inventive way.', cols: 1, rows: 1, color: 'lightgreen', title: 'Mulesoft and Miracle', url: ''},

  ];

  constructor() { }

  ngOnInit() {
  }

}

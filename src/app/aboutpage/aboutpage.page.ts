import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.page.html',
  styleUrls: ['./aboutpage.page.scss'],
})
export class AboutpagePage implements OnInit {

  public name = 'Engel Yanset'
  public lastName = 'Rodriguez Contreras'
  public age = 21;
  public id = '2022-0849'

  constructor() { }

  ngOnInit() {
    
  }

}

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Tools', url: 'tools', icon: 'hammer' },
    { title: 'Genre', url: 'genrepage', icon: 'transgender' },
    { title: 'Age', url: 'agepage', icon: 'calendar-number' },
    { title: 'Country', url: 'countrypage', icon: 'globe' },
    { title: 'Weather', url: 'weatherpage', icon: 'thunderstorm' },
    { title: 'WordPress', url: 'wordpresspage', icon: 'newspaper' },
    { title: 'About', url: 'aboutpage', icon: 'information-circle' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

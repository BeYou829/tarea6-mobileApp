import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';

@Component({
  selector: 'app-wordpresspage',
  templateUrl: './wordpresspage.page.html',
  styleUrls: ['./wordpresspage.page.scss'],
})
export class WordpresspagePage implements OnInit {
  public latestPosts: any[] | null = null;
  public errorMessage: string = '';

  constructor(private wordpress: WordpressService) { }

  ngOnInit() {
    this.getLatestPosts();
  }
  getLatestPosts() {
    this.wordpress.getLatestPosts().subscribe(
      (posts) => {
        this.latestPosts = posts;
        console.log(this.latestPosts)
      },
      (error) => {
        this.errorMessage = 'Could not load latest posts';
      }
    );
  }
  //https://css-tricks.com/wp-json/wp/v2/posts
  //https://css-tricks.com/category/articles/wp-json/wp/v2/posts

}

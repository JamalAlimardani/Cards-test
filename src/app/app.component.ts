import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [{
    title: 'درخت',
    imageUrl: 'assets/images/ic-zoom (2).png',
    username: 'مستر درخت',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. i saw neat tree',
  },
  {
    title: 'کوه',
    imageUrl: 'assets/images/ic-zoom.png',
    username: 'مستر کوه',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. i saw neat mountain',
  },
  {
    title: 'دوچرخه',
    imageUrl: 'assets/images/ic-zoom1.png',
    username: 'مستر دوچرخه',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. i saw neat biking',
  }];

  getPosts(){
    return this.posts;
  }

}

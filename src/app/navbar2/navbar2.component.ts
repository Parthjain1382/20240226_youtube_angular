import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar2',
  standalone: true,
  imports: [],
  templateUrl: './navbar2.component.html',
  styleUrl: './navbar2.component.css'
})
export class Navbar2Component {
  Subscriptions: string[] = ['TMKOC']; // Array of subscriptions

  videoPreviews: any[] = [
    {
      author: 'TMKOC',
      title: 'Video 1',
      thumbnailSrc: 'https://www.merisaheli.com/wp-content/uploads/2021/02/tarak3.jpg',
      videoTime: '2:30',
      profileSrc: 'https://yt3.ggpht.com/Ou8cuqWa6u_cH5UdmwIp47au5TEKSXOyj13dHlXv92gjGe4xk2EkkBHN3641s1wDhE4thR09xg=s88-c-k-c0x00ffffff-no-rj',
      views: 1000
    },
    {
      author: 'ABC',
      title: 'HAhaha',
      thumbnailSrc: 'path/to/thumbnail2.jpg',
      videoTime: '3:45',
      profileSrc: 'path/to/profile2.jpg',
      views: 1500
    },
    {
      author: 'TMKOC',
      title: 'hahahahah',
      thumbnailSrc: 'https://www.merisaheli.com/wp-content/uploads/2021/02/tarak3.jpg',
      videoTime: '4:20',
      profileSrc: 'path/to/profile3.jpg',
      views: 2000
    },
    {
      author: 'TMKOC',
      title: 'hahahahah',
      thumbnailSrc: 'https://www.merisaheli.com/wp-content/uploads/2021/02/tarak3.jpg',
      videoTime: '4:20',
      profileSrc: 'path/to/profile3.jpg',
      views: 2000
    },

  ];

  filteredData: any[] = []; // Array to store filtered video previews

  constructor() {
    // Filter video previews based on subscriptions
    this.filteredData = this.videoPreviews.filter(video =>
      this.Subscriptions.includes(video.author)
    );
  }

  // Method to filter video previews by subscription
  filterBySubscription(subscription: string) {
    this.filteredData = this.videoPreviews.filter(video =>
      video.author === subscription
    );
  }
}



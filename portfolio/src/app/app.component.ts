import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  currentYear = 2023;
  ngOnInit() {
    AOS.init();
  }
  
  openEmail(){
    const email = 'AdejokunIbk@gmail.com';
    window.open(`mailto:${email}`);
  }

  openGithub(){
    const gitHubName = 'IAdejokun';                       
    window.open(`https://github.com/${gitHubName}`)
  };
  openTwitter(){
    const twitterName = 'adejokun_ibk';                                   
    window.open(`https://twitter.com/${twitterName}`);
  };
  openLinkedIn(){
    const linkedInName = 'adejokun-ibukunoluwa-9b2625189';
    window.open(`https://www.linkedin.com/in/${linkedInName}`)
  };
}

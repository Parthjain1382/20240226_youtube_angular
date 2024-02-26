import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-sidepanel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidepanel.component.html',
  styleUrl: './sidepanel.component.css'
})

export class SidepanelComponent {

  account:Array<{ logo_detail:string,panel_logo:string,logoName:string, panel1_logo:string,click_name:string,link:string}>=
  [
    {
    logo_detail:'home',
    panel_logo:"panel-home",
    logoName: 'home',
    panel1_logo:"panel1-home",
    click_name:'Home',
    link:"#"
  },
  {
    logo_detail:'shorts',
    panel_logo:"panel-shorts",
    logoName: 'music_note',
    panel1_logo:"panel1-shorts",
    click_name:'Shorts',
    link:"#"
  }
]

yourtrack:Array<{ logo_detail:string,panel_logo:string,logoName:string, panel1_logo:string,click_name:string}>=[
  {
    logo_detail:"your-channel",
    panel_logo:"panel-your-channel",
    logoName:"account_box",
    panel1_logo:"panel1-your-channel",
    click_name:"Your channel",
  },
  {
    logo_detail:"history",
    panel_logo:"panel-history",
    logoName:"history",
    panel1_logo:"panel1-history",
    click_name:"history",
  },
  {
    logo_detail:"your-videos",
    panel_logo:"panel-your-videos",
    logoName:"smart_display",
    panel1_logo:"panel1-your-videos",
    click_name:"Your videos",
  },
  {
    logo_detail:"watch-later",
    panel_logo:"panel-watch-later",
    logoName:"schedule",
    panel1_logo:"panel1-watch-later",
    click_name:"Watch later",
  },
  {
    logo_detail:"Show-more",
    panel_logo:"panel-Show-more",
    logoName:"expand_more",
    panel1_logo:"panel1-Show-more",
    click_name:"Show more",
  }
]

user:Array<{prof_image:string,user_name:string}>=[
  {
    prof_image:"https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s88-c-k-c0x00ffffff-no-rj",
    user_name:"T-series",
  },
  {
    prof_image:"https://yt3.ggpht.com/ytc/AIf8zZTNiWLD2-Qw1eWFmRJkGBzfI-8oFNmYk5tBnpNurQ=s88-c-k-c0x00ffffff-no-rj",
    user_name:"CodeWithharry"
  },
  {
    prof_image:"https://yt3.ggpht.com/Ou8cuqWa6u_cH5UdmwIp47au5TEKSXOyj13dHlXv92gjGe4xk2EkkBHN3641s1wDhE4thR09xg=s88-c-k-c0x00ffffff-no-rj",
    user_name:"TMKOC",
  },
  {
    prof_image:"https://yt3.ggpht.com/WJxfYkh2yc9Cl8Hq7jVgyU67PR2fnfbMFl-b3ksvS0DPFR7p820J_hxWN4f19l-gMLy5EqxYXQ=s88-c-k-c0x00ffffff-no-rj",
    user_name:"SkRossi",
  },
  {
    prof_image:"https://yt3.ggpht.com/ytc/AIdro_kYwxz6eFxsm7Va3fOObJepgZWpu59eWdQZTjFnJQ=s88-c-k-c0x00ffffff-no-rj",
    user_name:"Ajshabeel",
  },
  {
    prof_image:"https://yt3.ggpht.com/ytc/AIf8zZQtndIYHLB9VSJRJT6XWHzbqP1AJyQ-WSEuDqjyeg=s88-c-k-c0x00ffffff-no-rj",
    user_name:"Brut"
  },
  {
    prof_image:"https://yt3.googleusercontent.com/U9uAsG6INJJ127qy1XuY0ibwvLrAA3ovYPxjBgbiBaWNi4NktxAGoSznhPMWaIToTJKA_xEB=s176-c-k-c0x00ffffff-no-rj",
    user_name:"Phone Repair guru"
  }
]

explore:Array<{icon:string,name:string}>=[
  {
    icon:"local_fire_department",
    name:"Trending"
  },
  {
    icon:"local_fire_department",
    name:"Trending",
  },
  {
    icon:"shopping_bag",
    name:"shopping",
  },
  {
    icon:"music_note",
    name:"Music",
  },
  {
    icon:"movie",
    name:"Movies",
  },
  {
    icon:"wifi_tethering",
    name:"Live",
  },
  {
    icon:"sports_esports",
    name:"Gaming",
  }
]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-sidepanel2',
  standalone: true,
  imports: [],
  templateUrl: './sidepanel2.component.html',
  styleUrl: './sidepanel2.component.css'
})
export class Sidepanel2Component {

  account:Array<{logo_detail:string,  panel1_logo:string,click_name:string,link:string}>=
  [
    {
    logo_detail:'home',
    panel1_logo:"panel1-home",
    click_name:'Account',
    link:"#"
  },
  {
    logo_detail:'home',
    panel1_logo:"panel1-shorts",
    click_name:'notifications',
    link:"#"
  },
  {
    logo_detail:'home',
    panel1_logo:"panel1-shorts",
    click_name:'Playback and performance',
    link:"#"
  },
  {
    logo_detail:'home',
    panel1_logo:"panel1-shorts",
    click_name:'Downloads',
    link:"#"
  },
  {
    logo_detail:'home',
    panel1_logo:"panel1-shorts",
    click_name:'Privacy',
    link:"#"
  },
  {
    logo_detail:'home',
    panel1_logo:"panel1-shorts",
  click_name:'Connected apps',
  link:"#"
  },
  {logo_detail:'home',
  panel1_logo:"panel1-shorts",
  click_name:'Billing and payments',
  link:"#"
  },
  {
    logo_detail:'home',
    panel1_logo:"panel1-shorts",
  click_name:'Advanced setting',
  link:"#"
  },

]


}

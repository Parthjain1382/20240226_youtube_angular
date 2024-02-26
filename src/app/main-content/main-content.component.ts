import { Component } from '@angular/core';

@Component({
  selector: 'app-carasol',
  standalone: true,
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})

export class CarasolComponent {

  line1:Array<{thumnail:string,play_time:string,prof_pic:string}>=[
    {
      thumnail:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fe0.pxfuel.com%2Fwallpapers%2F661%2F470%2Fdesktop-wallpaper-jethalal-s-solution-for-babita-s-unease-jetha-babita-scene-taarak-mehta-ka-ooltah-chashmah-jethalal-champaklal-gada.jpg&tbnid=lkJnhUIcMx-BxM&vet=12ahUKEwjJ2fy9p8mEAxWWZmwGHXCNBygQMygJegQIARBf..i&imgrefurl=https%3A%2F%2Fwww.pxfuel.com%2Fen%2Fdesktop-wallpaper-xvisa&docid=JdUK5zUR8HjrWM&w=850&h=478&q=youtube%20thumbnail%20download%20tmkoc%20image&ved=2ahUKEwjJ2fy9p8mEAxWWZmwGHXCNBygQMygJegQIARBf",
      play_time:"9:00",
      prof_pic:"https://yt3.ggpht.com/Ou8cuqWa6u_cH5UdmwIp47au5TEKSXOyj13dHlXv92gjGe4xk2EkkBHN3641s1wDhE4thR09xg=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      thumnail:"",
      play_time:"",
      prof_pic:"",
    }
    ,
    {
      thumnail:"",
      play_time:"",
      prof_pic:"",
    },
    {
      thumnail:"",
      play_time:"",
      prof_pic:"",
    }
    ,
    {
      thumnail:"",
      play_time:"",
      prof_pic:"",
    }
  ]
}

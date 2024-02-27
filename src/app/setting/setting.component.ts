import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { Sidepanel2Component } from '../sidepanel2/sidepanel2.component';
import { MainContent2Component } from '../main-content2/main-content2.component';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [HomeComponent,RouterLink,NavbarComponent,Sidepanel2Component,MainContent2Component],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

}

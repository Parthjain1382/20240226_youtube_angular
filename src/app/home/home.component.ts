import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidepanelComponent } from '../sidepanel/sidepanel.component';
import { CarasolComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,SidepanelComponent,CarasolComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

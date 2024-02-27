import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidepanelComponent } from '../sidepanel/sidepanel.component';
import { Navbar2Component } from '../navbar2/navbar2.component';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [NavbarComponent,SidepanelComponent,Navbar2Component],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {

}

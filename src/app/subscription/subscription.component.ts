import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidepanelComponent } from '../sidepanel/sidepanel.component';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [NavbarComponent,SidepanelComponent],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {

}

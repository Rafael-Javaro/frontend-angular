import { Component } from '@angular/core';
import { SidebarItem } from '../shared/interfaces-dto/sidebar-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {
  sidebarItems: SidebarItem[] = [
    {
      label: 'Dashboard',
      icon: 'bi-speedometer2',
      route: '/dashboard'
    },
    {
      label: 'Components',
      icon: 'bi-grid',
      children: [
        {
          label: 'Buttons',
          route: '/components/buttons',
          icon: 'bi-menu-button'
        },
        {
          label: 'Forms',
          route: '/components/forms',
          icon: 'bi-ui-checks'
        }
      ]
    },
    // Add more items as needed
  ];
}

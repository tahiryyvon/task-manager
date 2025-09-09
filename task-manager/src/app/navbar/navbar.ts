import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [CommonModule, PanelMenuModule],

  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  items: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-home',
      routerLink: ['/dashboard']
    },
    {
      label: 'Tasks',
      icon: 'pi pi-fw pi-list',
      routerLink: ['/tasks']
    },
    {
      label: 'Users',
      icon: 'pi pi-fw pi-users',
      routerLink: ['/users']
    }
  ];
}

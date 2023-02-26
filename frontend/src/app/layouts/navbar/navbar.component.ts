import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navItems = [
    { link: 'home', title: 'Home' },
    { link: 'about', title: 'About' },
    { link: 'services', title: 'Services' },
    { link: 'contact', title: 'Contact' },
  ];
}

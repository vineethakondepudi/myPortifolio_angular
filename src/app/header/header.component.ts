import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;


constructor( private router: Router){}

 toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.router.navigate(['/all']);
    } else {
      this.router.navigate(['/']);  
    }
  }
}

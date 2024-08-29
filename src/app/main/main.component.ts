import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  loading = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Subscribe to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('NavigationStart event detected');
        this.loading = true;  // Start loader
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        console.log('NavigationEnd, NavigationCancel, or NavigationError event detected');
        // Set a delay before hiding the loader
        setTimeout(() => {
          this.loading = false;  // Stop loader after 1 second delay
        }, 3000);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeriodicElement } from '../table/table.component'; // Adjust the path as necessary

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  element: PeriodicElement | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Retrieve the element data from sessionStorage
    const elementData = sessionStorage.getItem('editElement');
    this.element = elementData ? JSON.parse(elementData) : null;
    console.log('Editing element:', this.element);
  }

  goBack(): void {
    // Clear the element data from sessionStorage
    sessionStorage.removeItem('editElement');
    this.router.navigate(['/table']);
  }
}

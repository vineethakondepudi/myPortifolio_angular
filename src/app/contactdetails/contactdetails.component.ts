import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailsComponent implements OnInit {
  dataSource = new MatTableDataSource<any>(); // Initialize as a MatTableDataSource
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'message']; // Define the columns you want to display
  passwordForm: FormGroup;
  isAuthenticated = false; // Tracks whether the user has entered the correct password
  errorMessage: string | null = null;

  private readonly correctPassword = 'Vi@nn46u'; // The correct password

  constructor(private service: ServiceService, private fb: FormBuilder) {
    // Initialize the password form with validation
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const enteredPassword = this.passwordForm.get('password')?.value;
    if (enteredPassword === this.correctPassword) {
      this.isAuthenticated = true;
      this.errorMessage = null;
      this.fetchDetails();
    } else {
      this.errorMessage = 'Incorrect password. Please try again.';
    }
  }

  fetchDetails(): void {
    this.service.getContact().subscribe(data => { 
      this.dataSource.data = data; // Assign the fetched data to the dataSource
    });
  }

  applyFilter(event: Event): void {
    
    
    const filterValue = (event.target as HTMLInputElement).value;
    
    this.dataSource.filter = filterValue.trim().toLowerCase(); // Apply the filter
  }

  clearErrorMessage(): void {
    this.errorMessage = null;
  }
}

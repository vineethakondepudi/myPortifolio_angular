import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ServiceService, private snackBar: MatSnackBar, private router:Router) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Create a new object with lowercase values
      const formData = {
        firstName: this.contactForm.get('firstName')?.value.toLowerCase(),
        lastName: this.contactForm.get('lastName')?.value.toLowerCase(),
        email: this.contactForm.get('email')?.value.toLowerCase(),
        message: this.contactForm.get('message')?.value.toLowerCase()
      };
  
      this.service.postContact(formData).subscribe(
        response => {
          console.log('Response:', response);
          this.openSnackBar('Data submitted successfully!');
          this.router.navigate(['']);
        },
        error => {
          console.error('Error:', error);
          this.openSnackBar('Error submitting data. Please try again.');
        }
      );
    } else {
      console.error('Form is invalid');
      this.openSnackBar('Please fill out all required fields.');
    }
  }
  

  openSnackBar(message:any) {
    this.snackBar.open(message, 'Close', {
      duration:  3000,
    });
    
  }


  
}


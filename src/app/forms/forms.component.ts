import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  loginForm: FormGroup;
  hide = true;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const {username, password} = this.loginForm.value;
      if (username === "vkondepudi@miraclesoft.com" && password === "Vinnu@123") {
        localStorage.setItem('isAuthenticated', 'true')
        console.log(this.loginForm.value);
        this.router.navigate(['/practice'],{
          queryParams : {username, password} // Pass credentials as query parameters
        }
        )
      } else {
        console.log("Invalid credentials");
        this.errorMessage = "Invalid credentials"
      }
      
    }
  }
}

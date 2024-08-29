import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-dob',
  templateUrl: './dob.component.html',
  styleUrls: ['./dob.component.css']
})
export class DobComponent {
  ageForm: FormGroup;
  age: number | null = null;

  constructor(private fb: FormBuilder) {
    this.ageForm = this.fb.group({
      birthDate: ['', Validators.required]
    });
  }

  calculateAge(): void {
    if (this.ageForm.valid) {
      const birthDate = this.ageForm.value.birthDate;
      this.age = this.getAge(birthDate);
    }
  }

  getAge(birthDate: string): number {
    const birthMoment = moment(birthDate);
    const currentMoment = moment();
    return currentMoment.diff(birthMoment, 'years');
  }
}

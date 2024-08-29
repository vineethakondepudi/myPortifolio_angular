import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent {
  dateRangeForm: FormGroup;
  daysBetween: number | null = null;

  constructor(private fb: FormBuilder) {
    this.dateRangeForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  calculateDaysBetween(): void {
    if (this.dateRangeForm.valid) {
      const startDate = this.dateRangeForm.value.startDate;
      const endDate = this.dateRangeForm.value.endDate;
      this.daysBetween = this.getDaysBetween(startDate, endDate);
    }
  }

  getDaysBetween(startDate: string, endDate: string): number {
    const startMoment = moment(startDate);
    const endMoment = moment(endDate);
    return endMoment.diff(startMoment, 'days');
  }
}

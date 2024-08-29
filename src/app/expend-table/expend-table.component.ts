import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  symbol: string;
  expanded?: boolean; // To track the expanded state
  loading?: boolean; // To track the loading state
  title?: string; // Additional data from API
  completed?: boolean; // Additional data from API
}


const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { id: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { id: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-expend-table',
  templateUrl: './expend-table.component.html',
  styleUrls: ['./expend-table.component.css']
})
export class ExpendTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'weight', 'symbol', 'edit'];
  dataSource = ELEMENT_DATA;
  paginatedData: PeriodicElement[] = [];
  pageSize = 3;
  currentPage = 1;
  pages: number[] = [];

  constructor(
    private router: Router, 
    private http: HttpClient,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {
    this.calculatePages();
  }

  ngOnInit(): void {
    const storedPage = sessionStorage.getItem('currentPage');
    this.currentPage = storedPage ? +storedPage : 1;
    this.selectPage(this.currentPage);
  }

  calculatePages() {
    const totalPages = Math.ceil(this.dataSource.length / this.pageSize);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  selectPage(page: number) {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedData = this.dataSource.slice(start, end);
    sessionStorage.setItem('currentPage', page.toString());
  }

  onEdit(element: PeriodicElement): void {
    sessionStorage.setItem('editElement', JSON.stringify(element));
    this.router.navigate(['/edit', element.id]);
  }

  onAdd(element: PeriodicElement): void {
    element.expanded = !element.expanded;

    if (element.expanded && !element.title) {
      element.loading = true;
      this.http.get(`https://jsonplaceholder.typicode.com/todos/${element.id}`).subscribe(
        (data: any) => {
          element.title = data.title;
          element.completed = data.completed;
          element.loading = false;
          this.cdr.detectChanges();
        },
        (error) => {
          console.error('Error fetching data', error);
          element.loading = false;
        }
      );
    }
  }
}

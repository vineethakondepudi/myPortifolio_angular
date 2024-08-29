import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'edit'];
  dataSource = ELEMENT_DATA;
  paginatedData: PeriodicElement[] = [];
  pageSize = 3;
  currentPage = 1;
  pages: number[] = [];

  constructor(private router: Router) {
    this.calculatePages();
  }

  ngOnInit(): void {
    // Retrieve the current page from sessionStorage
    const storedPage = sessionStorage.getItem('currentPage');
    this.currentPage = storedPage ? +storedPage : 1;
    this.selectPage(this.currentPage);
  }

  calculatePages() {
    const totalPages = Math.ceil(this.dataSource.length / this.pageSize);
    this.pages = Array.from({length: totalPages}, (_, i) => i + 1);
  }

  selectPage(page: number) {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedData = this.dataSource.slice(start, end);
    // Store the current page in sessionStorage
    sessionStorage.setItem('currentPage', page.toString());
  }

  onEdit(element: PeriodicElement): void {
    // Store the element data in sessionStorage
    sessionStorage.setItem('editElement', JSON.stringify(element));
    this.router.navigate(['/edit', element.position]);
  }
}

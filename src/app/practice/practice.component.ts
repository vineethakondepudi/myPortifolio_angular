import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  columnsToDisplay = ['source', 'facilityName', 'pallets'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: any | null = null;

  // Single data source for all cards
  wmsData = [
    { source: 'Customer WMS Data', facilityName: 'Facility A', pallets: 120, card: 'card1' },
    { source: 'Customer WMS Data', facilityName: 'Facility C', pallets: 200, card: 'card2' },
    { source: 'Customer WMS Data', facilityName: 'Facility E', pallets: 180, card: 'card3' },
    { source: 'Customer Lease Data', facilityName: 'Facility F', pallets: 220, card: 'card3' }
  ];

  // Filtered data for each card
  getFilteredData(card: string) {
    return this.wmsData.filter(item => item.card === card);
  }

  toggleRow(element: any) {
    console.log(element,27);
    
    this.expandedElement = this.expandedElement === element ? null : element;
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent implements OnInit {
  selectedYear: string = '';
  launchStatus: string = '';
  landingStatus: string = '';

  @Output() filtersChanged = new EventEmitter<any>();

  ngOnInit(): void {
    // initialization if needed
  }

  emitFilters() {
    this.filtersChanged.emit({
      year: this.selectedYear,
      launchStatus: this.launchStatus,
      landingStatus: this.landingStatus
    });
  }

  filterByYear() {
    this.emitFilters();
  }

  resetFilters() {
    this.selectedYear = '';
    this.launchStatus = '';
    this.landingStatus = '';
    this.emitFilters();
  }
}

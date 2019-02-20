import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { SmsData } from '../SmsData'
import { DataServicesService } from '../services/data-services.service';
import { data } from '../../assets/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

/**
 * This class is responsible for controlling the table.
 * @class
 */
export class TableComponent implements OnInit {
  /** Variable defines the order of columns in table */
  displayedColumns: string[] = ['city', 'start_date', 'end_date', 'color', 'status', 'price'];
  dataSource;

  /** filterObject contains value of start and end date */
  filterObject = {
    startDateFilterValue: "",
    endDateFilterValue: ""
  };

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dataService: DataServicesService) { }

  ngOnInit() {
    /** data fetched from json.file in assets folder */
    this.dataService.getModel().subscribe(e => {
      let data: any = e;
      this.dataSource = new MatTableDataSource(data);

      /** Sort table */
      this.dataSource.sort = this.sort;

      /** Separate table into pages */
      this.dataSource.paginator = this.paginator;

      /** filterPredicate is used for filtering table according to some specific columns */
      this.dataSource.filterPredicate = function (data, filter: string): boolean {
        /** parse string into object */
        let filterObject = JSON.parse(filter);

        /** return data element matching start and end date  */
        return data.start_date.toLowerCase().includes(filterObject.startDateFilterValue)
          && data.end_date.toLowerCase().includes(filterObject.endDateFilterValue);
      };
    })
  }

  /** Set start date value for filter object.
   * then stringify the object into string, since the property filterPredicate of dataSource only accept type string.
   */
  setStartDateFilterValue(startDateFilterValue: string) {
    this.filterObject.startDateFilterValue = startDateFilterValue.trim().toLowerCase();
    this.dataSource.filter = JSON.stringify(this.filterObject);
  }

  /** Set end date value for filter object.
   * then stringify the object into string, since the property filterPredicate of dataSource only accept type string.
   */
  setEndDateFilterValue(endDateFilterValue: string) {
    this.filterObject.endDateFilterValue = endDateFilterValue.trim().toLowerCase();
    this.dataSource.filter = JSON.stringify(this.filterObject);
  }
}

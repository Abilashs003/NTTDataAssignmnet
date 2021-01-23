import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import { XlsService } from '../services/xls.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css'],
})
export class DataViewComponent implements AfterViewInit {
  displayedColumns: string[] = [];

  tablexlsData: any;

  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(public xlsservice: XlsService) {
    this.displayedColumns = this.xlsservice.xlsDataKeys;
    this.tablexlsData = new MatTableDataSource(this.xlsservice.xlsdata);
  }

  ngOnInit(): void {}

  search(event: Event) {
    const keyword = (event.target as HTMLInputElement).value;
    this.tablexlsData.filter = keyword.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.tablexlsData.sort = this.sort;
  }
}

import { Injectable } from '@angular/core';
import { userData } from '../models/userData';
import { xlsData } from '../../assets/testData';

@Injectable({
  providedIn: 'root',
})
export class XlsService {
  xlsdata: userData[] = [];
  xlsDataKeys: string[] = [];
  constructor() {
    this.xlsdata = xlsData;
    this.xlsDataKeys = Object.keys(this.xlsdata[0]);
  }
}

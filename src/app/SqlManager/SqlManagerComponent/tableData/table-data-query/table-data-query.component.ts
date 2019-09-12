import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-table-data-query',
  templateUrl: './table-data-query.component.html',
  styleUrls: ['./table-data-query.component.css']
})
export class TableDataQueryComponent implements OnInit {

  @Input() sqlResult: []; // all of result to sql result

  @Input() defaultLanguage: number;
  @Input() translationObject: any;

  @Input() colSpan: number; // size of the colspan
  @Input() dataLength: number; // number of data

  @Input() tableName: string; // name of the current table who the sql query are execute

  noDataAlertIsClose: boolean; // boolean to toggle the `x` of alert when no data are detected

  /**
   * init the component
   */
  ngOnInit() {
    // set the default value
    this.noDataAlertIsClose = true;
  }

  /**
   * return if any variable is a boolean
   * @param testingVariable is a varibale with the type object to check if boolean or not
   * @return true or false
   */
  isBoolean(testingVariable: any) {
    return typeof testingVariable === 'boolean';
  }

  /**
   * return if any variable is a number
   * @param testingVariable is a varibale with the type object to check if number or not
   * @return true or false
   */
  isNumber(testingVariable: any) {
    return typeof testingVariable === 'number';
  }

  /**
   * return if any variable is a string
   * @param testingVariable is a varibale with the type object to check if string or not
   * @return true or false
   */
  isString(testingVariable: any) {
    return typeof testingVariable === 'string';
  }
}

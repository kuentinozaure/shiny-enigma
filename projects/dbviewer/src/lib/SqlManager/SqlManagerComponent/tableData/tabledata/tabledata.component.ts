import { Component, OnInit, Input } from '@angular/core';
import { TranslationWidth } from '@angular/common';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent implements OnInit {

  constructor() { }

  @Input() datas: []; // all of data of table selected
  @Input() column: []; // all column of data selected
  @Input() tableName: string; // name of table name selected
  @Input() translationObject: any; // object can translate the app with translation.json
  @Input() defaultLanguage: number; // default language : 0 for english and 1 for french
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

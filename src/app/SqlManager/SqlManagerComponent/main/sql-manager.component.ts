import { Component, OnInit, Input } from '@angular/core';

import { SqlManagerService } from '../../SqlManagerServices/sql-manager.service';
import Translation from '../../Translation/translation.json';
import ThemeConfigurator from '../../Theme/ThemeConfigurator.json';
import { LogType, Log } from '../../class/log';

@Component({
  selector: 'app-sql-manager',
  templateUrl: './sql-manager.component.html',
  styleUrls: ['./sql-manager.component.css']
})

export class SqlManagerComponent implements OnInit {

@Input() apiUrl: string; // choice of the user about the apiUrl
@Input() typeCSS: string; // choice of the user about the css

  tablesName: []; // list of table name
  sequenceList: []; // list of sequence
  sqlResult: []; // sql result
  sequenceInfo: []; // all info about one sequence
  columnName: []; // list of all column name needed to tab datatable info
  datasOfColumn: []; // list of all datasOfColumn needed to tab datable info

  logs: Array<Log>; // list of logs of the application

  translationObject: any; // object who reference to translation file
  themeConfigurator: any; // object can config the theme

  defaultLanguage: number; // is the language by default 0 for english 1 for french 2 for spanish
  defaultThemeColor: number; // is color for the main theme
  numberOfcolumn: number; // number of column of query
  tab: number; // indicate that the tab was clicked
  dataLength: number; // number of result

  tableName: string; // name of the table
  sequenceName: string; // name of the selected sequence
  query: string; // stock the value of the query

  collapseTable: boolean; // indicate if the table panel is close or open
  queryIsNothing: boolean; // indicate if the text area is fill or not
  textAreaError: boolean; // boolean to toggle the `x` of alert when user are type wrong value in sql area
  emptySequencesname: boolean; // boolean to toggle the `x` of alert of sequence not found
  emptyTableName: boolean; // boolean to toggle the `x` of alert of table not found
  emptyLog: boolean; // boolean to toggle the `x` of alert of log not found

  /**
   * constructor of the component
   * @param service is dependency injection of SqlManagerService
   */
  constructor(private service: SqlManagerService) {
  }

  /**
   * init the component
   */
  ngOnInit() {
    // variable initialisation
    this.tablesName = [];
    this.sequenceList = [];
    this.sequenceInfo = [];
    this.logs = new Array<Log>();
    this.tab = 1;
    this.dataLength = 0;
    this.numberOfcolumn = 0;
    this.collapseTable = true;
    this.queryIsNothing = false;
    this.textAreaError = true;
    this.emptyTableName = true;
    this.emptyLog = true;
    this.emptySequencesname = true;
    this.sequenceName = '';
    this.tableName = '';
    this.columnName = [];
    this.datasOfColumn = [];
    this.defaultLanguage = 0;
    this.defaultThemeColor = 0;
    this.fetchAllData();
    console.log(this.translationObject);
    console.log(this.themeConfigurator);
  }

  /**
   * This method allows you to get all data for init the display of the component
   */
  fetchAllData() {
    this.getTablesName();
    this.getAllSequences();
    this.translationObject =  Translation;
    this.themeConfigurator = ThemeConfigurator;
  }

  /**
   * This method allows you to set the default query when a table is clicked and get all detail about this one
   * @param table : is a name of the table
   */
  setDefaultQueryWithTableNameAndDetails(table: string) {
    this.tableName = table.toLowerCase();
    this.query = 'SELECT * FROM ' + table.toUpperCase();
    this.fetchAllDataFromDT();
    this.tab = 2; // redirect to about tab
  }

  /**
   * This method allows you to get the sequences info
   * @param sequence : is a name of the sequence
   */
  getSequenceInfos(sequence: string) {
    this.sequenceName = sequence;
    this.tab = 3; // redirect to sequence infos tab
    this.fetchSequenceInfo();
  }

  /**
   * this method get all sequence info from backend
   */
  fetchSequenceInfo() {
    this.service.fetchAllSequencesInfos(this.apiUrl, this.sequenceName)
    .subscribe((data: any) => {
      this.sequenceInfo = data[0];

      this.addLog(
        new Log(
          LogType.INFORMATION,
          this.translationObject.allsequenceinfosuccess[this.defaultLanguage],
          this.getDate()
        )
      );
    },
    error => {
      this.addLog(
        new Log(
          LogType.ERROR,
          error.message,
          this.getDate()
          )
        );
    }
    );
  }

  /**
   * this method get all information about a datable from backend
   */
  fetchAllDataFromDT() {
    this.service.fetchAllDataFromDT(this.apiUrl, this.tableName)
    .subscribe((data: any) => {
      this.columnName = data.columns;
      this.datasOfColumn = data.datas;
      this.tableName = data.name;

      this.addLog(
        new Log(
          LogType.INFORMATION,
          this.translationObject.alldatafromdtsuccess[this.defaultLanguage],
          this.getDate()
        )
      );
    },
    error => {
      this.addLog(
        new Log(
          LogType.ERROR,
          error.message,
          this.getDate()
          )
        );
    }
    );
  }

  /**
   * This method allows you to get the table names
   */
  getTablesName() {
    this.service.fetchAllTablesName(this.apiUrl)
    .subscribe((data: any) => {
      this.tablesName = data;

      this.addLog(
        new Log(
          LogType.INFORMATION,
          this.translationObject.alltablesucesslog[this.defaultLanguage],
          this.getDate()
        )
      );
    },
    error => {
      this.addLog(
        new Log(
          LogType.ERROR,
          error.message,
          this.getDate()
          )
        );
    }
    );
  }

  /**
   * This method allows you to get the sequences name
   */
  getAllSequences() {
    this.service.fetchAllSequences(this.apiUrl)
    .subscribe((data: any) => {
      this.sequenceList = data;

      this.addLog(
        new Log(
          LogType.INFORMATION,
          this.translationObject.allsequencesucesslog[this.defaultLanguage],
          this.getDate()
        )
      );
    },
    error => {
      this.addLog(
        new Log(
          LogType.ERROR,
          error.message,
          this.getDate()
          )
        );
    }
    );
  }

  /**
   * This method allows you to execute a query
   * @param table : is a query to execute
   */
  executeClientQuery(query: string) {

    if (query === '' || query === null || query === undefined) {
      this.queryIsNothing = true;
      this.textAreaError = true;

      this.addLog(
        new Log(
          LogType.ERROR,
          this.translationObject.errormessagesqlareaempty[this.defaultLanguage],
          this.getDate()
        )
      );
    } else {
      this.service.executeClientQuery(this.apiUrl, query)
    .subscribe((data: any) => {
      console.log(data);


      if (data.tables.length !== 0) {
        this.dataLength = data.tables[0].datas.length; // get number of occurrences of the sql query
        this.sqlResult = data.tables[0].datas; // get all datas who returned by the sql query
        this.tableName = data.tables[0].name; // get table name

        this.addLog(
          new Log(
            LogType.INFORMATION,
            this.translationObject.sqlqueryexecutewithsucess[this.defaultLanguage],
            this.getDate()
          )
        );

        // if the length of query result is not 0
        if (this.sqlResult !== undefined) {
          this.numberOfcolumn = data.tables[0].datas[0].length;
        }
      }


      let logConcat = '';
      for (const log of data.logs) {
        logConcat += log + '\n';
      }

      this.addLog(
        new Log(
          LogType.INFORMATION,
          logConcat,
          this.getDate()
        )
      );
    },
    error => {
      this.addLog(
        new Log(
          LogType.ERROR,
          error.message,
          this.getDate()
          )
        );
    }
    );
    }
  }

  addLog(log: Log) {
    this.logs.push(log);
  }

  getDate(): string {
    const today = new Date();
    const time = today.getDate() + '/' + today.getMonth() + '/' +
                 today.getFullYear() + ';' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    return time;
  }



}

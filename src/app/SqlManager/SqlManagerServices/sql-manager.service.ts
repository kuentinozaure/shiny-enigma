import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SqlManagerService {

  constructor(private http: HttpClient) {
  }

  /**
   * this method get all table names from backend
   * @param url is the url of the backend
   * @returns the result of the backend
   */
  fetchAllTablesName(url: string): Observable<object> {
    return this.http.get(url + '/db_viewer', { withCredentials: true })
  }

  /**
   * this method get all sequences names from backend
   * @param url is the url of the backend
   * @returns the result of the backend
   */
  fetchAllSequences(url: string): Observable<object> {
    return this.http.get(url + '/db_viewer/sequences', { withCredentials: true });
  }

  /**
   * this method get all data from backend after execute a query
   * @param url is the url of the backend
   * @param query is the query to execute
   * @returns the result of the backend
   */
  executeClientQuery(url: string, query: string): Observable<object> {
    return this.http.put(url + '/db_viewer', query, { withCredentials: true});
  }

  /**
   * this method get all informations about one sequence
   * @param url is the url of the backend
   * @param sequence the sequence where you want the most information
   */
  fetchAllSequencesInfos(url: string , sequence: string): Observable<object> {
    return this.http.post(url + '/db_viewer/sequences', sequence, { withCredentials: true});
  }

  /**
   * this method get all data about one datable
   * @param url is the url of the backend
   * @param tableName the name of the data table
   */
  fetchAllDataFromDT(url: string, tableName: string): Observable<object> {
    return this.http.post(url + '/db_viewer', tableName, { withCredentials: true});
  }

}

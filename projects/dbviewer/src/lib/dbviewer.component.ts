import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-dbviewer',
  template: `
  <app-sql-manager></app-sql-manager>
  `,
  styles: []
})
export class DbviewerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

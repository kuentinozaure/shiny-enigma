import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SqlManagerComponent } from '../app/SqlManager/SqlManagerComponent/main/sql-manager.component';
import { SqlManagerService } from '../app/SqlManager/SqlManagerServices/sql-manager.service';
import { TabledataComponent } from '../app/SqlManager/SqlManagerComponent/tableData/tabledata/tabledata.component';
import { TableDataQueryComponent } from '../app/SqlManager/SqlManagerComponent/tableData/table-data-query/table-data-query.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SqlManagerComponent,
    TabledataComponent,
    TableDataQueryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SqlManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

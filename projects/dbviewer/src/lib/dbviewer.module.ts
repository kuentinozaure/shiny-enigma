import { NgModule } from '@angular/core';
import { DbviewerComponent } from './dbviewer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SqlManagerComponent } from './SqlManager/SqlManagerComponent/main/sql-manager.component';
import { SqlManagerService } from './SqlManager/SqlManagerServices/sql-manager.service';
import { TabledataComponent } from './SqlManager/SqlManagerComponent/tableData/tabledata/tabledata.component';
import { TableDataQueryComponent } from './SqlManager/SqlManagerComponent/tableData/table-data-query/table-data-query.component';


@NgModule({
  declarations: [
    DbviewerComponent,
    SqlManagerComponent,
    TabledataComponent,
    TableDataQueryComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [SqlManagerService],
  exports: [DbviewerComponent]
})
export class DbviewerModule { }

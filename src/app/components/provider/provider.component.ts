// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-provider',
//   templateUrl: './provider.component.html',
//   styleUrl: './provider.component.scss'
// })
// export class ProviderComponent {

// }

import { Component, OnInit, ViewChild } from '@angular/core';
//import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProviderService } from '../../services/provider.service';
import { Providercleanupdata } from '../../Models/ProviderCleanupData';
//import { Customer } from 'src/app/Model/Customer';
//import { MasterService } from 'src/app/service/master.service';
//import { PopupComponent } from '../popup/popup.component';
//import { UserdetailComponent } from '../userdetail/userdetail.component';
//import { ProviderService } from 'src/app/services/provider.service';

 

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.scss'
})
export class ProviderComponent implements OnInit {  

  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  providersList ! : Providercleanupdata[];

  displayedColumns: string[] = ["prpR_ID", "prpR_NAME", "prpR_NPI", "prpR_TERM_DT", "prpR_MCTR_TRSN", "mctN_ID","praD_TYPE_PRIM","praD_TYPE_CHECK"];
  dataSource: any;
  constructor(private providerSrvice:ProviderService) {
   
   }

   ngOnInit(): void {    
    this.loadProvider();
  }

   Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
  
  loadProvider() {
    this.providerSrvice.getProviders().subscribe({
      next: (res: Providercleanupdata[]) => {
        this.providersList = res;
        this.dataSource = new MatTableDataSource<Providercleanupdata>(this.providersList);
        this.dataSource.paginator = this.paginatior;
        this.dataSource.sort = this.sort;
      },
      error: (error: any) => {
        console.error('Error loading providers:', error);        
      }
    });
  }
  

  addcustomer(){
    //this.Openpopup(0, 'Add Customer',PopupComponent);
  }

}


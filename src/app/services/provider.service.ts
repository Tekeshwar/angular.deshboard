
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Providercleanupdata } from '../Models/ProviderCleanupData';
import { Observable, of } from 'rxjs';
import { ProviderTermCount } from '../Models/ProviderTermCount';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  constructor(private http: HttpClient) {}

  GetProviderList(): Providercleanupdata[] {
    return [
      {
        prpR_ID: 'c1',
        prpR_NAME: 'aaa',
        prpR_NPI: 'black2',
        prpR_TERM_DT: new Date('01-01-2024'),
        prpR_MCTR_TRSN: 'black3',
        mctN_ID: 'black4',
        praD_TYPE_PRIM: 'black5',
        praD_TYPE_CHECK: 'black6',
      },
      {
        prpR_ID: 'c2',
        prpR_NAME: 'bbb',
        prpR_NPI: 'black2',
        prpR_TERM_DT: new Date('02-01-2024'),
        prpR_MCTR_TRSN: 'black3',
        mctN_ID: 'black4',
        praD_TYPE_PRIM: 'black5',
        praD_TYPE_CHECK: 'black6',
      },
      {
        prpR_ID: 'c3',
        prpR_NAME: 'ccc',
        prpR_NPI: 'black2',
        prpR_TERM_DT: new Date('02-01-2024'),
        prpR_MCTR_TRSN: 'black3',
        mctN_ID: 'black4',
        praD_TYPE_PRIM: 'black5',
        praD_TYPE_CHECK: 'black6',
      },
      {
        prpR_ID: 'c4',
        prpR_NAME: 'dddd',
        prpR_NPI: 'black2',
        prpR_TERM_DT: new Date('02-01-2024'),
        prpR_MCTR_TRSN: 'black3',
        mctN_ID: 'black4',
        praD_TYPE_PRIM: 'black5',
        praD_TYPE_CHECK: 'black6',
      },
      {
        prpR_ID: 'c5',
        prpR_NAME: 'eeee',
        prpR_NPI: 'black2',
        prpR_TERM_DT: new Date('02-01-2024'),
        prpR_MCTR_TRSN: 'black3',
        mctN_ID: 'black4',
        praD_TYPE_PRIM: 'black5',
        praD_TYPE_CHECK: 'black6',
      },
      {
        prpR_ID: 'c6',
        prpR_NAME: 'fff',
        prpR_NPI: 'black2',
        prpR_TERM_DT: new Date('02-01-2024'),
        prpR_MCTR_TRSN: 'black3',
        mctN_ID: 'black4',
        praD_TYPE_PRIM: 'black5',
        praD_TYPE_CHECK: 'black6',
      },
      {
        prpR_ID: 'c7',
        prpR_NAME: 'hhhh',
        prpR_NPI: 'black2',
        prpR_TERM_DT: new Date('02-01-2024'),
        prpR_MCTR_TRSN: 'black3',
        mctN_ID: 'black4',
        praD_TYPE_PRIM: 'black5',
        praD_TYPE_CHECK: 'black8',
      },
    ];
  }

  GetProviderTermCountList(): ProviderTermCount[] {
    return [
      {
        month: '1',
        mctN_ID: '20',
        npi: '1',
        valuE1: '1',
      },
      {
        month: '3',
        mctN_ID: '30',
        npi: '8',
        valuE1: '8',
      },
    ];
  }
  getProviders(): Observable<Providercleanupdata[]> {
    const providers = this.GetProviderList(); // Get the providers synchronously
    return of(providers); // Return an Observable emitting the providers
  }

  getTurmCount(): Observable<ProviderTermCount[]> {
    const data = this.GetProviderTermCountList();

    return of(data);
    //return this.getTurmCount();
  }
}

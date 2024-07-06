import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { ProviderService } from './provider.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProviderResolverService implements Resolve<any> {
  constructor(private providerService: ProviderService) {}

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

  // }<<
  resolve(): Observable<any> {
    return this.providerService.getTurmCount();
  }
}

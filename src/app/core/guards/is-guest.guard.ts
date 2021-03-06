import { AuthService } from './../../shared/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsGuestGuard implements CanActivate {


  constructor(
    private authService: AuthService,
  ){

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 

      Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean | UrlTree {

      // if ( this.authService.isAuthenticated$ === true ) {
      //   console.log('confirm')
      // }else {
      //   console.log('denied')
      // }
    return this.authService.isAuthenticated$;
    
  }
  
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // isAuthenticated: boolean = false;

  isAuthenticated$ = new BehaviorSubject<boolean>(false)

  constructor() { }
}

import { Injectable } from '@angular/core';
import { people } from 'src/app/mock/peopels.mock';

@Injectable({
  providedIn: 'root'
})
export class MemberService  {

  peoples = people;

  

  constructor() { }
}

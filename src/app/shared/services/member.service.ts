import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { people } from 'src/app/mock/peopels.mock';
import { Member } from '../models/members.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService  {

  peoples: any[] = [...people];
  
  people$ = new BehaviorSubject <any>([...people]);
  

  
  page = 1;
  pageSize = 1;
  currentPage: number;

  constructor() { 
    
  }

  addMember(member:Member) :void {
    // Создаем новый массив,скопируем д-ные текущего значения бехавиор и добвать обьэкт 
    
      this.people$.next(
        [...this.people$.getValue(), 
        {...member, id: this.getId()}])

      // this.peoples.push({...member, id: this.getId()});
  }

  getMember(id: string) :Member {
    return this.people$.getValue().find((i) => i.id === id);
  }

  editMember(id:string, member:Member) :void  {
      const index = this.people$.getValue().findIndex(i => i.id === id);
     
      const members = [...this.people$.getValue()];

      members[index] = {...members[index], ...member};  

      this.people$.next(members);
  }

  getId() : string{
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}

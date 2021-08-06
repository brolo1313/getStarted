import { MemberService } from 'src/app/shared/services/member.service';
import { Injectable } from '@angular/core';
import { people } from 'src/app/mock/peopels.mock';
import { Member } from '../models/members.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  peoples: any[] = [...people];

  people$ = new BehaviorSubject <any>([...people]);

  page = 1;
  pageSize = 1;
  currentPage: number;
  

  constructor(
    private memberService: MemberService,
  ) 
  {  }


  addMember(member:Member) :void {
    this.people$.next(
      [...this.people$.getValue(), 
      {...member, id: this.getId()}])
    // this.peoples.push({...member, id: this.getId()});
    
  }

  getMember(id: string) :Member {
    return this.people$.getValue().find((i) => i.id === id);
    // return this.peoples.find(peoples => peoples.id === id)
  }

  editMember(id:string, member:Member) :void  {
      // const index = this.peoples.findIndex(peoples => peoples.id === id);
      // this.peoples[index] = {...this.peoples[index], ...member};
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

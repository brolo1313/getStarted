import { Injectable } from '@angular/core';
import { people } from 'src/app/mock/peopels.mock';
import { Member } from '../models/members.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  peoples: any[] = [...people];

  page = 1;
  pageSize = 1;
  currentPage: number;

  constructor() { }


  addMember(member:Member) :void {
    
    this.peoples.push({...member, id: this.getId()});
  }

  getMember(id: string) :Member {
    return this.peoples.find(peoples => peoples.id === id)
  }

  editMember(id:string, member:Member) :void  {
      const index = this.peoples.findIndex(peoples => peoples.id === id);
      this.peoples[index] = {...this.peoples[index], ...member};
      
  }

  getId() : string{
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  
}

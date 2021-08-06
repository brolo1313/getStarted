import { Component, Input, OnInit } from '@angular/core';
import { TableTitles } from 'src/app/shared/components/table/table-header/@types/table-headers.model';
import { MemberService } from 'src/app/shared/services/member.service';
import { TeamService } from 'src/app/shared/services/team.service';

@Component({
  selector: 'app-team-container',
  templateUrl: './team-container.component.html',
  styleUrls: ['./team-container.component.scss']
})
export class TeamContainerComponent implements OnInit {


 

  tableHeaders : TableTitles[] = [
    {
      text: 'Name', 
      visible: true,
    },
    {
      text: 'Title', 
      visible: true,
    },
    {
      text: 'Status', 
      visible: true,
    },
    {
      text: 'Role', 
      visible: true,
    },
    {
      text: 'Edit', 
      visible: false,
    }
    
  ];

  constructor(
    public teamService: TeamService,
    public memberService: MemberService,
    ) { }

  ngOnInit(): void {
   
  }
  

}



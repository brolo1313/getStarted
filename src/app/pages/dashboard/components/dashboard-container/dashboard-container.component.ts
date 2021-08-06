import { Component, OnInit } from '@angular/core';
import { TableTitles } from 'src/app/shared/components/table/table-header/@types/table-headers.model';
import { MemberService } from 'src/app/shared/services/member.service';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  

 

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

 



  constructor(public memberService: MemberService) {
   
   }

  ngOnInit(): void {
  }

   


  pageChange(page: number): void{
    // console.log(page);
   
      
  } 

}

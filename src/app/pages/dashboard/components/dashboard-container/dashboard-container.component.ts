import { Component, OnInit } from '@angular/core';
import { TableTitles } from 'src/app/shared/components/table/table-header/@types/table-headers.model';

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

//     peoples = [
//   {
//     "name": "Jane Cooper",
//     "title": "Frontend developer",
//     "department": "Optimization",
//     "role": "Admin",
//     "email": "jane.cooper@example.com",
//     "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
//   },
//   {
//     "name": "Roy Lopez",
//     "title": "Backend developer",
//     "department": "server",
//     "role": "Member",
//     "email": "roy.lopez@example.com",
//     "image": "https://randomuser.me/api/portraits/med/men/90.jpg"
//   },
//   {
//     "name": "Andrew Yupin",
//     "title": "Front End developer",
//     "department": "web",
//     "role": "admin",
//     "email": "brolo1341@gmail.com",
//     "image": "https://i.ibb.co/JBqCFdt/1.jpg"
//   },
  
// ];



  constructor() {
   
   }

  ngOnInit(): void {
  }


  page = 1;
  pageSize = 1;
  currentPage: number;

  pageChange(page: number): void{
    // console.log(page);
   
      
  } 

}

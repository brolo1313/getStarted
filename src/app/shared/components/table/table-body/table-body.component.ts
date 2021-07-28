
import { Component,  OnInit } from '@angular/core';

interface User {
  name: string;
  title:string;
  department:string;
  role:string;
  email:string;
  image:string;

}

const USERS : User[] = 
[
  {
    "name": "Jane Cooper",
    "title": "Frontend developer",
    "department": "Optimization",
    "role": "Admin",
    "email": "jane.cooper@example.com",
    "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  },
  {
    "name": "Roy Lopez",
    "title": "Backend developer",
    "department": "server",
    "role": "Member",
    "email": "roy.lopez@example.com",
    "image": "https://randomuser.me/api/portraits/med/men/90.jpg"
  },
  {
    "name": "Andrew Yupin",
    "title": "Front End developer",
    "department": "web",
    "role": "admin",
    "email": "brolo1341@gmail.com",
    "image": "https://i.ibb.co/JBqCFdt/1.jpg"
  }
];

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit {

 users = USERS;

 
  

  constructor() { }

  ngOnInit(): void {
  }

}

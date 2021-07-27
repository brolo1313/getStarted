import { Component, OnInit } from '@angular/core';


interface Titles {
  name: string;
  title:string;
  status:string;
  role:string;
  

}

const Title : Titles[]= [
  {
    name: 'NAME',
    title: 'TITLE',
    status: 'STATUS',
    role: 'ROLE'
  }
];

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {

  title = Title;

  constructor() { }

  ngOnInit(): void {
  }

}

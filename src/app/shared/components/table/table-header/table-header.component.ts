import { Component, Input, OnInit } from '@angular/core';
import { TableTitles } from './@types/table-headers.model';






@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {

  @Input() titles: TableTitles[];

  

  constructor() { }

  ngOnInit(): void {
  }

}


import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/services/member.service';



@Component({
  selector: 'app-table-td',
  templateUrl: './table-td.component.html',
  styleUrls: ['./table-td.component.scss']
})
export class TableTdComponent implements OnInit {
  
  
  
  constructor(public memberService: MemberService) { }

  ngOnInit(): void {
  }

}

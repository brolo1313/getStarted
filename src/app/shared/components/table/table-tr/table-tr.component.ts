import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/services/member.service';



@Component({
  selector: 'app-table-tr',
  templateUrl: './table-tr.component.html',
  styleUrls: ['./table-tr.component.scss']
})
export class TableTrComponent implements OnInit {
  


  constructor(public memberService: MemberService) { }

  ngOnInit(): void {
  }

}

import { people } from './../../../../mock/peopels.mock';
import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from 'src/app/shared/@types/state.model';

import { MemberService } from 'src/app/shared/services/member.service';
import { TeamService } from 'src/app/shared/services/team.service';

@Component({
  selector: 'app-member-action-container',
  templateUrl: './member-action-container.component.html',
  styleUrls: ['./member-action-container.component.scss']
})
export class MemberActionContainerComponent implements OnInit {

  form: FormGroup;       //  переменная форм имеет интерфейс FormGroup
  state: State;
  page : String;
  actionTitle:string;





  constructor(
     private formBuilder: FormBuilder,
     private memberService: MemberService,
     private activatedRoute: ActivatedRoute,
     private router: Router,
     private teamService: TeamService,
     ) {}

  ngOnInit(): void {
   this.initView();
    this.initForm();

    this.memberService.people$.subscribe( people => {
      
    })
  }






    initView() : void {
      this.state = this.activatedRoute.snapshot.data.state;
      this.page = this.activatedRoute.snapshot.queryParams.page;

      this.actionTitle = this.state === State.Created ? 'Created' : 'Updated';
    }

    initForm(): void {
      this.form = this.formBuilder.group(
        {
          firstName: this.formBuilder.control(null),
          lastName: this.formBuilder.control(null),
          email: this.formBuilder.control(null, ),
          city: this.formBuilder.control(null),
          region: this.formBuilder.control(null),
          zip: this.formBuilder.control(null),
          country: this.formBuilder.control(null),
          street: this.formBuilder.control(null),
          title: this.formBuilder.control(null),

        },
      )

        if(this.state === State.Edit) {
          const member = this.getMember(this.activatedRoute.snapshot.params.id);
          this.form.patchValue(member);
        }
  
    }


     
    action() : void {
      if(this.state === State.Edit){
        this.editMember(
          this.activatedRoute.snapshot.params.id,
          this.form.value
          )
      }else {
        this.addMember(this.form.value)
        // this.memberService.addMember(this.form.value)
      }
       
        this.router.navigate([`/${this.page}`])
    }
      

    getMember(id: string){
     return this.actionServic().getMember(id);
         
    }

    editMember(id: string,data){
      this.actionServic().editMember(id, data)
    }

    addMember(data){
      this.actionServic().addMember(data)
    }


    actionServic(){
      if(this.page ==='dashboard'){
        return this.memberService;
      }else if (this.page ==='team') {
        return this.teamService;
      }
    }

}
import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from 'src/app/shared/@types/state.model';

import { MemberService } from 'src/app/shared/services/member.service';

@Component({
  selector: 'app-member-action-container',
  templateUrl: './member-action-container.component.html',
  styleUrls: ['./member-action-container.component.scss']
})
export class MemberActionContainerComponent implements OnInit {

  form: FormGroup;       //  переменная форм имеет интерфейс FormGroup
  state: State;
  actionTitle:string;





  constructor(
     private formBuilder: FormBuilder,
     private memberService: MemberService,
     private activatedRoute: ActivatedRoute,
     private router: Router,
     ) {}

  ngOnInit(): void {
   this.initView();
    this.initForm();
  }

    initView() : void {
      this.state = this.activatedRoute.snapshot.data.state;
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
          const member =this.memberService.getMember(this.activatedRoute.snapshot.params.id);
          this.form.patchValue(member);
        }
  
    }


     
    action() : void {
      if(this.state === State.Edit){
        this.memberService.editMember(this.activatedRoute.snapshot.params.id,this.form.value)
      }else {
        this.memberService.addMember(this.form.value)
      }
       
        this.router.navigate(['/dashboard'])
    }
      
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-member-action-container',
  templateUrl: './member-action-container.component.html',
  styleUrls: ['./member-action-container.component.scss']
})
export class MemberActionContainerComponent implements OnInit {

  form: FormGroup;        //  переменная форм имеет интерфейс FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

    initForm(): void {
      this.form = this.formBuilder.group(
        {
          firstName: this.formBuilder.control(null),
          lastName: this.formBuilder.control(null),
          email: this.formBuilder.control(null),
          city: this.formBuilder.control(null),
          region: this.formBuilder.control(null),
          zip: this.formBuilder.control(null),
          country: this.formBuilder.control(null),
          street: this.formBuilder.control(null),

        },
      )
    }
     
    action() : void {
      console.log(this.form.value)
    }
      
}
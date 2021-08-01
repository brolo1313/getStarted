import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';


import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberService } from './services/member.service';

@NgModule({
  declarations: [],
  imports: [
     CommonModule,
     ComponentsModule, 
     DirectivesModule, 
     NgbPaginationModule,
     ReactiveFormsModule],
  exports: [
    CommonModule, 
    ComponentsModule, 
    DirectivesModule, 
    NgbPaginationModule,
    ReactiveFormsModule],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [MemberService],
    };
  }
}

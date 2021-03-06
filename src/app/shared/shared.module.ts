import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';


import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberService } from './services/member.service';
import { PostService } from './services/post.service';
import { TeamService } from './services/team.service';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [],
  imports: [
     CommonModule,
     ComponentsModule, 
     DirectivesModule, 
     NgbPaginationModule,
     ReactiveFormsModule,
     HttpClientModule],
    
  exports: [
    CommonModule, 
    ComponentsModule, 
    DirectivesModule, 
    NgbPaginationModule,
    ReactiveFormsModule,
    HttpClientModule],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [MemberService,PostService, TeamService, ApiService, AuthService], 
    };
  }
}

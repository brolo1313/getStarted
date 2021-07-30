import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { ServicesModule } from './services/services.module';


import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
     CommonModule,
     ComponentsModule, 
     ServicesModule, 
     DirectivesModule, 
     NgbPaginationModule,
     ReactiveFormsModule],
  exports: [
    CommonModule, 
    ComponentsModule, 
    ServicesModule, 
    DirectivesModule, 
    NgbPaginationModule,
    ReactiveFormsModule],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}

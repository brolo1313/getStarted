import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostContainerComponent } from './components/post-container/post-container.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PostContainerComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
  ]
})
export class PostModule { }

import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Post } from '../models/post.model';
import { BehaviorSubject } from 'rxjs';
import { Params } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PostService extends EntityCollectionServiceBase<Post> {



  // static loading$: any;

  posts$ = new BehaviorSubject(null);
  

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private apiService:ApiService,
  ) {
    // должно быть матчед с entity metadata
    super('Posts', serviceElementsFactory);
  }



  getPosts(params? :Params, refresh?: boolean) {

    if(!refresh && this.posts$.getValue()){
      return;
    }


     this.apiService.get<Post[]>('posts', params).subscribe((data) => { 
        this.posts$.next(data); });
  }


  creatPost(data) {
    this.apiService.post('posts', data).subscribe((data) => {
      this.posts$.next([...this.posts$.getValue(), data]);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {

  loading$: Observable<boolean>;
  // posts$: Observable<Post[]>;

  posts$ = new BehaviorSubject(null);

  constructor(public postService: PostService) {
    // this.posts$ = postService.entities$;
    this.loading$ = postService.loading$;
   }

  ngOnInit(): void {
      // this.getPosts();
      // this.update();
    this.postService.getPosts({} , true );
    // this.postService.delete('4')

    // this.postService.creatPost({title: ' TEST TITLE NEW ADD '});


      // this.add({
      //   id:'asd',
      //   title:'test123',
      //   text: ' practica',
      // })
  }


  getPosts() {
    this.postService.getAll();
  }

  add(post: Post) {
    this.postService.add(post);
  }
 

  update() {
    this.postService.update({ id: '4', title: 'New title update'});
  }

 
  
}

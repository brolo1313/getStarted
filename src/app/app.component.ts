import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-jam-firt-lesson';

  @ViewChild('headerTitle')  headerTest:ElementRef ;

  

   testBtn(){
     console.log(this.headerTest)
   }

  
}

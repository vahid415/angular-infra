import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-infra-app';
  num = 20;

  constructor() { }

  //   constructor(i: Injector) {
  //     of(this.num).pipe(
  //       map(x => {
  //         this.title = 'sdfsdf';
  //         const titleService = i.get(Title);

  //         return x;
  //       })
  //     ).subscribe(x => {
  //       const y = this.num;
  //     });
  //   }
}

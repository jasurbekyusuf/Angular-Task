import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  inheritance: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.inheritance = JSON.parse(params['inheritance']);
    });
  }
}
 // calculateSon(): void {
  //   console.log(this.numberOfSonsValue);
  // }

  // calculateDaughter():void {
  //   console.log(this.numberOfDaughtersValue);

  // }

import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    <hr>
    {{param}}
  `,
  styles: []
})
export class HomeComponent implements OnDestroy{
  private subscription: Subscription;

  param: string;

  constructor(private route: ActivatedRoute) {
    this.subscription = this.route.queryParams.subscribe(
        (queryParam: any) => this.param = queryParam['analytics']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

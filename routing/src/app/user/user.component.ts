import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user',
  template: `
      <h1>User Component</h1>
      <button (click)="onNavigate()">Go Home</button>
      <hr>
      {{id}}
    `
})
export class UserComponent implements OnInit, OnDestroy{
  private subscription: Subscription;

  id: string;

  constructor(private router: Router, private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(
        (param: any) => this.id = param['id']
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNavigate() {
    this.router.navigate(['/'], {queryParams: {'analytics': 100}});
  }

}

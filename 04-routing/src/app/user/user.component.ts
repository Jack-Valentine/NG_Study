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
      <hr>
      <router-outlet></router-outlet>
    `
})
export class UserComponent implements OnDestroy{
  private subscription: Subscription;

  id: string;

  constructor(private router: Router, private routerFragment: ActivatedRoute, private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(
        (param: any) => this.id = param['id']
    );
    this.subscription = this.routerFragment.fragment.subscribe(
        fragment => console.log(routerFragment)
    );
  }

  onNavigate() {
    this.router.navigate(['/'], {queryParams: {'analytics': 100}});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

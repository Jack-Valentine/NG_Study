import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-elemet.component.html',
  styleUrls: ['./server-elemet.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElemetComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() { }

}

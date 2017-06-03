import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-elemet',
  templateUrl: './server-elemet.component.html',
  styleUrls: ['./server-elemet.component.css']
})
export class ServerElemetComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {
    this.accountService.statusUpdate.subscribe(
      (status: string) => alert('New Status : ' + status)
    )
  }

  ngOnInit() {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAcount(accountName, accountStatus);
    /*this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.loggingService.logStatusChange(accountStatus);*/
    /*const service = new LoggingService();
    service.logStatusChange(accountStatus);*/
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}

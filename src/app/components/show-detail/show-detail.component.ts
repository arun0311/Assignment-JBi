import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IRegisteredUsers } from 'src/app/enums/user.enum';
import { UserRecordService } from '../../services/user-record.service';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {

  public usersRecord: IRegisteredUsers;
  private readonly unsubscribe$: Subject<void> = new Subject();
  public showData: boolean = false;

  constructor(private userService: UserRecordService) {
    this.getRegisterUsers();
  }

  ngOnInit(): void {
  }

  /**
   * to get registered users record
   * @method getRegisterUsers
   */
  private getRegisterUsers(): void {
    this.userService.getRegisteredUsers().pipe(takeUntil(this.unsubscribe$))
    .subscribe(records => {
      this.usersRecord = records;
      setTimeout(() => {
        this.showData = true;
      }, 3);
    })
  }

  /* unsubscribe the subscribe obervable */
  ngOnDestory(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

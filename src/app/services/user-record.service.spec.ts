import { TestBed } from '@angular/core/testing';

import { UserRecordService } from './user-record.service';

describe('UserRecordService', () => {
  let service: UserRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

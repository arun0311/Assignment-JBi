import { Component, EventEmitter, Input, Output } from '@angular/core';
import paginate from "./paginate.util";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() items;
  @Input() pageSize = 10;
  @Input() maxPages = 100;
  @Input() previousLabel = 'Previous';
  @Input() nextLabel = 'Next';

  private currentPage = 1;
  public pages: Array<number>;
  public startIndex: number;
  public endIndex: number;
  public last: number;

  ngOnInit() {
    this.calculateIndexes();
    this.last = Math.ceil(this.items.length/this.pageSize);
  }

  /**
   * calulate records and set pagination parameters
   * @method calculateIndexes
   */
  private calculateIndexes() {
    const pagination = paginate(
      this.items.length,
      this.currentPage,
      this.pageSize,
      this.maxPages
    );
    this.currentPage = pagination.currentPage;
    this.pages = pagination.pages;
    this.startIndex = pagination.startIndex;
    this.endIndex = pagination.endIndex;
  }

  /**
   * set the previous page for pagination
   * @method previous
   */
  public previous() {
    this.currentPage--;
    this.calculateIndexes();
  }

  /**
   * set the next page for pagination
   * @method previous
   */
  public next() {
    this.currentPage++;
    this.calculateIndexes();
  }

  /**
   * set the current page for pagination
   * @method setCurrent
   */
  public setCurrent(page) {
    this.currentPage = page;
    this.calculateIndexes();
  }

}

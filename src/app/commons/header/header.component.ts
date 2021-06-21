import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMobile: boolean = false;

  /**
   * detects after screen size is changed
   * @param event 
   * @returns boolean
   * @method getScreenSize
   */
  @HostListener('window:resize', ['$event'])
  private getScreenSize(event?) {
    this.isMobile = window.innerWidth <= 650;
    return window.innerWidth <= 650;
  }
  constructor() { }

  /**
   * to initialize compoenent method is invoked immediately
   * @method ngOnInit
   */
  public ngOnInit(): void {
    this.isMobile = this.getScreenSize();
  }

}

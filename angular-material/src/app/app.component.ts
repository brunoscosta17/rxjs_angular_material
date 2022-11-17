import { map } from 'rxjs/operators';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { fromEvent } from 'rxjs';

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 60;
export const SHADOWN_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  public isSmallScreen: boolean = false;
  public popText = false;
  public applyShadow = false;

  title = 'angular-material';

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];
    fromEvent(content, 'scroll')
      .pipe(
        map(() => content.scrollTop)
      )
      .subscribe({
        next: (value: number) => this.determineHeader(value)
      });
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }

  ngAfterViewInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .subscribe((res) => this.isSmallScreen = res.matches);
  }

  determineHeader(scrollTop: number) {
    this.popText = scrollTop >= TEXT_LIMIT;
    this.applyShadow = scrollTop >= SHADOWN_LIMIT;
  }

}

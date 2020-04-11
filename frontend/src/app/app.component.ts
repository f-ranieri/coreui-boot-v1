import { Component, AfterViewInit } from '@angular/core';
import { RestTestService } from './rest-test.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'app';

  constructor(public restTestService: RestTestService) { }

  ngAfterViewInit(): void {
    this.restTestService.apiCall().subscribe(next => {
      console.log(next);
    }, err => {
      console.error(err);
    });
  }
}

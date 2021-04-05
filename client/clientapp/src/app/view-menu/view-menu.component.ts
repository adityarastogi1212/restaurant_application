import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { WebService } from "../WebService";

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {
  data:any
  constructor(public api: WebService) { }

  url=this.retreiveUrl();

  retreiveUrl() {
    this.api.viewMenuData().subscribe(url=>this.data=url);
  }

  ngOnInit(): void {
    

  }

}

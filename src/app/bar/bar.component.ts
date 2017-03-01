import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  buttons: any;
  bars: any;
  limit:any;
  option: any;
  barsarray: any;

  constructor(private http: Http) {
    this.option = 0;
    this.barsarray = [];
  }

  act(value) {

    if (this.barsarray[this.option].value >= 0) {
      this.barsarray[this.option].value = this.barsarray[this.option].value + value;
      if (this.barsarray[this.option].value < 0) {
        this.barsarray[this.option].value = 0;
      }
    }

    if (this.barsarray[this.option].value > this.limit) {
      this.barsarray[this.option].type = 'danger';
    } else {
      this.barsarray[this.option].type = 'warning';
    }
  }

  fetchData () {
    return this.http.get('http://pb-api.herokuapp.com/bars')
      .map(res => res.json());
  }

  ngOnInit() {
    this.fetchData().subscribe(results => {
      this.buttons = results.buttons;
      this.bars = results.bars;
      this.limit = results.limit;
      for (var i=0;i<this.bars.length;i++) {
        this.barsarray[i] = {};
        this.barsarray[i].value = this.bars[i];
        this.barsarray[i].type = 'warning';
      }
    });
  }

}

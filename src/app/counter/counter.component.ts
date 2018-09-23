import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'cc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  private score: number = 0;
  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  increment(){
    //this.score += 1;
    this.store.dispatch({type: 'INCREMENT', payload: 1});
    //console.log(this.score);
  }

  decrement(){
    //this.score -= 1;
    this.store.dispatch({type: 'DECREMENT', payload: 1});
    //console.log(this.score);
  }
}

import { Component } from '@angular/core';
import { endWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Counter App";

  count: number = 0;
  
  handleIncrease = () => {

    //the counter shouldn't go beyond 10
    if (this.count < 10 ){
      this.count = this.count + 1;
    }
  }

  handleDecrease = () => {

    //the counter shouldn't decrease below zero
    if(this.count > 0){
      this.count = this.count - 1;
    }
  }

  handleReset = () => {
    this.count = 0;
  }

}

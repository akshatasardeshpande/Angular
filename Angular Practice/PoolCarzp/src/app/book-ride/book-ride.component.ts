import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {
  ShowAllRides : any = [];
  showBtns : boolean = false;
  showTable : boolean = false;
  hidebutton : boolean = true;
//   II. Store the ride details in an array & render it in a table. The array should contain the following fields:
// id-number, offerId - string, name - string, car - string, seatsLeft - number, pickUp - string, destination - string 

  ngOnInit(): void {
    this.ShowAllRides = [
      {
      StartPoint: 'Vanrose Junction',
      EndPoint: 'Office',
      SeatsAvailable : 3,
      },
      {
      StartPoint: 'PTP',
      EndPoint: 'Office',
      SeatsAvailable : 2,
      },
      {
      StartPoint: 'Office',
      EndPoint: 'East-Fort',
      SeatsAvailable : 7,
      },
      {
      StartPoint: 'Office',
      EndPoint: 'Central Mall',
      SeatsAvailable : 5,
      },
    ]
  }
  
  

  // clickEvent(){
  //   if(this.showBtns == false){
  //     this.showBtns= true;
  //   }
  //   else{
  //     this.showBtns= false;
  //   }
  // }

  clickEvent(){
    if(this.showTable == false && this.hidebutton == true && this.showBtns ==false){
      this.showTable= true;
      this.hidebutton = false;
      this.showBtns = true;
    }
    else{
      this.showTable= false;
      this.hidebutton = true;
      this.showBtns = true;
    }
  }



}

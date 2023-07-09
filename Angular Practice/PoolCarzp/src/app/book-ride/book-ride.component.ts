import { Component, OnInit } from '@angular/core';
import { RideFilterPipe } from '../ride-filter.pipe';
// import { Rides } from './Rides';

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
  filterText : string = '';
  // aRides: Array<any> = new Array();

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
      {
        StartPoint: 'Jaynagar Mane',
        EndPoint: 'Infosys',
        SeatsAvailable : 1,
        }
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
      this.showBtns = false;
    }
  }

  // onTooffice(){
  //   for(const locn of this.ShowAllRides){
  //     if(locn.EndPoint == 'Office')
  //     {  
  //       console.log(this.ShowAllRides(locn));
  //     }
  //   }
  // }

  // onFromoffice(){
  //   for(const locn of this.ShowAllRides){
  //     if(locn.StartPoint == 'Office')
  //     {  
  //       console.log(this.ShowAllRides(locn));
  //     }
  //   }
  // }

  // onOthers(){
  //   for(const locn of this.ShowAllRides){
  //     if(locn.EndPoint != 'Office' && locn.StartPoint != 'Office' )
  //     {  
  //       console.log(this.ShowAllRides(locn));
  //     }
  //   }
  // }

  onTooffice(){
   //control should go to the filter
  this.filterText = 'Office';
  }

  onFromoffice(){
    //control should go to the filter
    this.filterText = 'Office';
  }

  onOthers(){
   //control should go to the filter
   this.filterText = 'Other';
  }

}


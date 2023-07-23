import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})

export class BookRideComponent implements OnInit {

ShowAllRides : any = [];
showTable : boolean = false;

ngOnInit() {
  
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
// ShowAll($event: any){
// if($event.target.innerHTMl == "")
// {
  
// }
// }

clickEvent(){
  if(this.showTable == false){
    this.showTable= true;
  }
  else{
    this.showTable= false;
  }

}

}


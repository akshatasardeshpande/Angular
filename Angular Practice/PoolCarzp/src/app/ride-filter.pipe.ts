//create a custom pipe, RideFilterPipe and 
//bind it with the table so that when user clicks on any of the three buttons, 
//it should filter the table

import { Pipe, PipeTransform } from '@angular/core';
import { BookRideComponent } from './book-ride/book-ride.component';
// import { Rides } from './book-ride/Rides';

@Pipe({
  name: 'rideFilter'
})
export class RideFilterPipe implements PipeTransform {
  // transform(value: any, ...args: any[]) {
  //   throw new Error('Method not implemented.');
  
  Ridee : any= [];

  transform(ShowAllRides: any, filterText: string)
{
   console.log(ShowAllRides);
   if(ShowAllRides.length === 0 || filterText === ''){
    return ShowAllRides;
    } 
    
  //   else if(filterText == "Office")
  //   {
  //   let x= ShowAllRides.filter(x) =>
  //   {
  //     x.StartPoint == "Office"
  //   }  
  //   console.log(x);
  //     }
      
  //     else if(filterText == "Office")
  //   {
  //   x = a.filter(x => EndPoint == "Office")
  //   console.log(x);
  //   }
    
  //   else if(filterText == "Office")
  //   {
  //   x = a.filter(x => x.EndPoint!= "Office" || x.EndPoint!= "Office")
  //   console.log(x);
  //   }
    
  //   else{
  //   console.log(a)
  //   }
   
}

}
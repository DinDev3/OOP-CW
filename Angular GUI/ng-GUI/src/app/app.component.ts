import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../app/services/vehicle.service';
import {MatTableDataSource} from '@angular/material';

// ----------------------------------------
// code for tables
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

// export class TableBasicExample {
//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource = ELEMENT_DATA;
// }

// --------------------------------------

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  title = 'ng-GUI';
  heading: string;

  getAllVehicles: any;


// ---------------
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
// ---------------

  constructor(private vehicleService: VehicleService) { }     // creating an instance of the service

  ngOnInit() {
    this.heading = 'Vehicle List';

    this.getAllVehicles = this.getServiceData();
    console.log(this.getAllVehicles);
  }

  getServiceData() {
    this.vehicleService.getData().subscribe(   // requesting service for information received from the backend
      data => {
        console.log(data);    // what to do with the received data
      }
    );
  }


  // -------------  for table filter function
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

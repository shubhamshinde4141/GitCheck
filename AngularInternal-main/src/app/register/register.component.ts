import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { User } from './user';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { merge, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit{

  displayedColumns: string[] = ['id', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
 
  
 
  links:User[]=[
    {
      name:"Shubham",
      id:1
    },
    {
      name:"Shubham",
      id:2
    },
    {
      name:"Shubham",
      id:3
    },
    {
      name:"Shubham",
      id:4
    }
  ];
  constructor() { }

  
  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  id: number;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  
];

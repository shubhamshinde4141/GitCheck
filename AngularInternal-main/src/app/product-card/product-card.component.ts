import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Product } from '../Modules/Product';

// export interface Product{

//   product_id:number;
//   uuid:string;
//   name :string;
//   description:string;
// price:number;
// imageUrl:string;
// }


const DATA1: Product[] = [

  {
    product_id:1,
  uuid:"asdsfsdfsdfsdfsdfsdf",
  name :"Boat Earphones",
  description:"Product Description",
  price:1233,
  imageUrl:""
  },
  {
    product_id:1,
  uuid:"asdsfsdfsdfsdfsdfsdf",
  name :"Boat Earphones",
  description:"Product Description",
  price:1233,
  imageUrl:""
  },
  {
    product_id:1,
  uuid:"asdsfsdfsdfsdfsdfsdf",
  name :"Boat Earphones",
  description:"Product Description",
  price:1233,
  imageUrl:""
  },
  {
    product_id:1,
  uuid:"asdsfsdfsdfsdfsdfsdf",
  name :"Boat Earphones",
  description:"Product Description",
  price:1233,
  imageUrl:""
  },
  {
    product_id:1,
  uuid:"asdsfsdfsdfsdfsdfsdf",
  name :"Boat Earphones",
  description:"Product Description",
  price:1233,
  imageUrl:""
  },
  {
    product_id:1,
  uuid:"asdsfsdfsdfsdfsdfsdf",
  name :"Boat Earphones",
  description:"Product Description",
  price:1233,
  imageUrl:""
  },
  {
    product_id:1,
  uuid:"asdsfsdfsdfsdfsdfsdf",
  name :"Boat Earphones",
  description:"Product Description",
  price:1233,
  imageUrl:""
  },
];


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit,OnDestroy {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  obs: Observable<any> | undefined;
  dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>(DATA1);


  firstColor:string="red"
  secondColour:string="blue"
  constructor(private changeDetectorRef: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }
  ngOnDestroy(): void {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
    throw new Error('Method not implemented.');
  }

  

  

}



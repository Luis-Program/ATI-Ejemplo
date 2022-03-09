import {Component, Inject, OnInit} from '@angular/core';
import { Product } from '../Model/Product';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})


export class ViewComponent implements OnInit {

  public ItemsArray: Product[] = [];

  constructor(private service : ProductsService) { }

  ngOnInit(): void {
    this.getDataApi();

  }

  getDataApi(){
    this.service.getData().subscribe((res: any[])=> {
        this.ItemsArray = res;
    });
  }



}


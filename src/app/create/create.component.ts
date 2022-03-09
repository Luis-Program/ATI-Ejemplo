import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products/products.service';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product : Product; 

  constructor(private router:Router,private service : ProductsService) { 

    this.product = new Product();

  }

  ngOnInit(): void {
  }


  onSubmit() {
    this.service.saveData(this.product).subscribe((res:any) => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/ViewProduct']);
  }

}
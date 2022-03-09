import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products/products.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productos: any;


  constructor(private router:Router,private service : ProductsService) {



  }

  nas = this.router.getCurrentNavigation();
  pros = this.nas?.extras;

  ngOnInit(): void {
    this.productos = this.pros;
  }

  onSubmit() {
    //const body = JSON.stringify(this.productos);
    //console.log(body);
    //console.log(this.productos);
    this.service.updateData(this.productos).subscribe((res:any) => this.gotoUserList() );
  }

  gotoUserList() {
    this.router.navigate(['/EditProduct']);
  }


}

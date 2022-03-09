import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Model/Product';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public ItemsArray: Product[] = [];
  constructor(private router:Router,private service : ProductsService) { }

  ngOnInit(): void {
    this.getDataApi();
  }

    Edit(product:any):void{
      this.router.navigate(["ProductEdit"],product);
    }
    Delete(product:any):void{
    
      this.service.deleteData(product).subscribe((res:any) => this.gotoUserList() );
    }

    getDataApi(){
      this.service.getData().subscribe((res: any[])=> {
          this.ItemsArray = res;
          //console.log(this.ItemsArray);
      });
    }
    

  gotoUserList() {
    this.router.navigate(['/ViewProduct']);
  }

}

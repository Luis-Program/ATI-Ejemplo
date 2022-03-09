import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [

  {
    path: 'ProductEdit',
    component: ProductEditComponent,
  },
  {
    path: 'CreateProduct',
    component: CreateComponent,
  },
  {
    path: 'EditProduct',
    component: EditComponent,

  },
  {
    path: 'ViewProduct',
    component: ViewComponent,
  },
  {
    path: '**',
    redirectTo: 'ViewProduct'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

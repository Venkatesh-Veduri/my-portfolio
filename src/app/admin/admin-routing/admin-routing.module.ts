import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PorjectComponent } from '../porject/porject.component';
import { PorjectCreateComponent } from '../porject-create/porject-create.component';
import { PorjectListComponent } from '../porject-list/porject-list.component';
import { PorjectUpdateComponent } from '../porject-update/porject-update.component';


const childRoutes: Routes=[
  {
    path:'admin',
    component:PorjectComponent,
    children:[
      {
        path:'list',
        component:  PorjectListComponent
      },
      {
        path:'create',
        component:  PorjectCreateComponent
      },
      {
        path:'update',
        component:  PorjectUpdateComponent
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(childRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { 

}

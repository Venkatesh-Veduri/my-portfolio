import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorjectListComponent } from './porject-list/porject-list.component';
import { PorjectCreateComponent } from './porject-create/porject-create.component';
import { PorjectUpdateComponent } from './porject-update/porject-update.component';
import { PorjectComponent } from './porject/porject.component';



@NgModule({
  declarations: [PorjectListComponent, PorjectCreateComponent, PorjectUpdateComponent, PorjectComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }

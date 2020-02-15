import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorjectListComponent } from './porject-list/porject-list.component';
import { PorjectCreateComponent } from './porject-create/porject-create.component';
import { PorjectUpdateComponent } from './porject-update/porject-update.component';
import { PorjectComponent } from './porject/porject.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';




@NgModule({
  declarations: [PorjectListComponent, PorjectCreateComponent, PorjectUpdateComponent, PorjectComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }

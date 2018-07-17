import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicosComponent } from './servicos.component';
import { SharedModule } from '../../shared/shared.module';


const CONVENIO_ROUTE = [
  { path: '', component: ServicosComponent },
];

@NgModule({
  declarations: [ServicosComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(CONVENIO_ROUTE)
  ]

})
export class ServicosModule { }

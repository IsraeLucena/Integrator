import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './registro.component';
import { SharedModule } from '../../shared/shared.module';


const Registro_ROUTE = [
  { path: '', component: RegistroComponent },
];

@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(Registro_ROUTE)
  ]

})
export class RegistroModule { }

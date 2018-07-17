import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnidadesComponent } from './unidades.component';
import { SharedModule } from '../../shared/shared.module';
const UNIDADES_ROUTE = [
  { path: '', component: UnidadesComponent },
];

@NgModule({
  declarations: [
    UnidadesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(UNIDADES_ROUTE)
  ]
})
export class UnidadesModule { }

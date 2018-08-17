import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConveniosComponent } from './convenios.component';
import { SharedModule } from '../../shared/shared.module';

import { FilterPipeModule } from 'ngx-filter-pipe';

const Convenios_ROUTE = [
  { path: '', component: ConveniosComponent },
];

@NgModule({
  declarations: [ConveniosComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(Convenios_ROUTE),
    FilterPipeModule
  ]

})
export class ConveniosModule { }

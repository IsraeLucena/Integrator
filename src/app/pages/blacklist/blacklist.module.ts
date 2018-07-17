import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlacklistComponent } from './blacklist.component';
import { SharedModule } from '../../shared/shared.module';


const Blacklist_ROUTE = [
  { path: '', component: BlacklistComponent },
];

@NgModule({
  declarations: [BlacklistComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(Blacklist_ROUTE)
  ]

})
export class BlacklistModule { }

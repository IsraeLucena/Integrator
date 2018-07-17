import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfiguracaoComponent } from './configuracao.component';
import { SharedModule } from '../../shared/shared.module';


const Configuracao_ROUTE = [
  { path: '', component: ConfiguracaoComponent },
];

@NgModule({
  declarations: [ConfiguracaoComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(Configuracao_ROUTE)
  ]

})
export class ConfiguracaoModule { }

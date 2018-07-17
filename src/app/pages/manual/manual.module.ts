import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManualComponent } from './manual.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { AceEditorModule } from 'ng2-ace-editor';

import { HelloComponent } from './hello.component';

import { BrowserModule } from '@angular/platform-browser';

const MANUAL_ROUTE = [
  { path: '', component: ManualComponent },
];

@NgModule({
  declarations: [
    ManualComponent,
    HelloComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(MANUAL_ROUTE),
    FormsModule,
    AceEditorModule
  ]
})
export class ManualModule { }

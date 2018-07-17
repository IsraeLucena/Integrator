// Angular
// https://angular.io/
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';


// UI Shared Components
import { FooterComponent } from '../layout/footer/footer.component';
import { AppBackdropComponent } from './components/app_backdrop/app_backdrop.component';
import { Profile } from './components/profile/profile.component';

// angular material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material';

// fullcalendar
import { FullCalendarModule } from 'ng-fullcalendar';

//check
import { ElCheckboxComponent } from './components/el-checkbox/el-checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
    MatSidenavModule,
    MatButtonModule,
    MatRippleModule,
    FullCalendarModule
  ],
  declarations: [
    AppBackdropComponent,
    FooterComponent,
    Profile,
    ElCheckboxComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    AppBackdropComponent,
    Profile,
    FooterComponent,
    ReactiveFormsModule,
    MalihuScrollbarModule,
    NgbModule,
    MatSidenavModule,
    MatButtonModule,
    MatRippleModule,
    FullCalendarModule,
    ElCheckboxComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}

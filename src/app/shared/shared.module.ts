import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule 
  ],
  exports: [
    HeaderComponent,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [  
    MatDatepickerModule,  
  ],
})
export class SharedModule { }

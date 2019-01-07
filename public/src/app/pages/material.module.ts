import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
})
export class MaterialModule { }
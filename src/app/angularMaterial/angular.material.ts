import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { MatMenuModule } from '@angular/material';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from  '@angular/material';

@NgModule({
imports: [
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatDividerModule,
MatSliderModule,
MatCardModule,
MatMenuModule,
MatToolbarModule,
 MatIconModule, 
MatSidenavModule,
 MatListModule
],

exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSliderModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
     MatIconModule, 
    MatSidenavModule,
     MatListModule
],
})
export class AppMaterialModule { }
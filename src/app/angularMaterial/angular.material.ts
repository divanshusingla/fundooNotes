import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';

@NgModule({
imports: [
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatDividerModule,
MatSliderModule,
MatCardModule
],

exports: [
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatDividerModule,
MatSliderModule,
MatCardModule
],
})
export class AppMaterialModule { }
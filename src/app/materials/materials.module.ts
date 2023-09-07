import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import {MatDialogModule} from '@angular/material/dialog';

import {MatSelectModule} from '@angular/material/select';

const materials = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatExpansionModule,
  MatFormFieldModule,
  FormsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatSelectModule
]

@NgModule({
  imports: [materials],
  exports: [materials]
})
export class MaterialsModule { }

import { NgModule } from  '@angular/core';
 
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,
    MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';

@NgModule({
imports: [MatButtonModule,MatToolbarModule,
    MatNativeDateModule,MatDatepickerModule,
    MatIconModule,MatButtonModule,MatCheckboxModule, 
    MatToolbarModule, MatCardModule,MatFormFieldModule,
    MatInputModule,MatRadioModule,MatListModule,FormsModule,MatTableModule,
    ReactiveFormsModule,MatGridListModule,FlexLayoutModule,MatChipsModule,MatExpansionModule,MatAutocompleteModule,MatSelectModule,FormsModule],
    
exports: [MatNativeDateModule,FormsModule,
    MatDatepickerModule,MatIconModule,MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule,MatChipsModule,MatTableModule,
    MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,MatExpansionModule,MatAutocompleteModule,MatSelectModule,FormsModule]
 
})
 
export  class  MyMaterialModule { }
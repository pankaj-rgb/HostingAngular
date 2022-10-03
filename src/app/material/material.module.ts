import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatButtonToggleModule, MatIconModule,
MatBadgeModule, MatProgressSpinnerModule,
MatToolbarModule,
MatSidenavModule ,
MatMenuModule,
MatListModule,
MatDividerModule,
MatGridListModule,
MatExpansionModule,
MatTabsModule,
MatStepperModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,
MatAutocompleteModule,
MatCheckboxModule,
MatRadioModule,
//date module below 2
MatDatepickerModule,
MatNativeDateModule,
MatTooltipModule,
MatSnackBarModule,
MatDialogModule,
MatTableModule , //for data table
MatSortModule, //for table sorting especially used for that
MatPaginatorModule, //

} from '@angular/material';


const MaterialComponents=[MatButtonModule,MatButtonToggleModule, MatIconModule,
MatBadgeModule, MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule,MatMenuModule, MatListModule, MatDividerModule,
MatGridListModule,MatExpansionModule,MatTabsModule,MatStepperModule
,MatFormFieldModule,
MatInputModule,
MatSelectModule,
MatAutocompleteModule,
MatCheckboxModule,
MatRadioModule,
MatDatepickerModule,
MatNativeDateModule,
MatTooltipModule,
MatSnackBarModule,
MatDialogModule,
MatTableModule ,
MatSortModule,
MatPaginatorModule
];
@NgModule({
  // declarations: [],
  imports: [MaterialComponents],
  exports:[MaterialComponents]
    // only for the material UI components
    // CommonModule
  
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';

const materialModules = [
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatSelectModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatPaginatorModule,
  MatSliderModule,
  // FlexLayoutModule,
  MatMenuModule,
  // MatSlideToggleModule,
  // MatOptionModule,
  // MatGridListModule,
];

@NgModule({
  declarations: [],
  imports: [...materialModules],
  exports: [materialModules],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500, horizontalPosition: 'center', verticalPosition: 'top'}}]
})
export class MaterialModule {}

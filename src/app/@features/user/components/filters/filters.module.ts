import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { FiltersComponent } from './filters.component';



@NgModule({
  declarations: [FiltersComponent],
  imports: [SharedModule],
  exports: [FiltersComponent]
})
export class FiltersModule { }

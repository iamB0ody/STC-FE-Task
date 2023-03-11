import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

const importAndExportModule = [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule]

@NgModule({
  declarations: [],
  imports: [...importAndExportModule],
  exports: [...importAndExportModule, TranslateModule]
})
export class SharedModule {}

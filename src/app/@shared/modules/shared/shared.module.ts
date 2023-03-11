import { NgModule } from '@angular/core';
import {
  CommonModule,
  NgOptimizedImage,
  PRECONNECT_CHECK_BLOCKLIST,
} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

const importAndExportModule = [
  CommonModule,
  FormsModule,
  MaterialModule,
  ReactiveFormsModule,
  NgOptimizedImage,
];

@NgModule({
  declarations: [],
  imports: [...importAndExportModule],
  exports: [...importAndExportModule, TranslateModule],
  providers: [
    {
      provide: PRECONNECT_CHECK_BLOCKLIST,
      useValue: 'https://fakestoreapi.com',
    },
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import {
  CommonModule,
  NgOptimizedImage,
  PRECONNECT_CHECK_BLOCKLIST,
} from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';

const importAndExportComponents = [HeaderComponent]

const importAndExportModule = [
  CommonModule,
  FormsModule,
  MaterialModule,
  ReactiveFormsModule,
  NgOptimizedImage,
];

@NgModule({
  declarations: [...importAndExportComponents],
  imports: [...importAndExportModule],
  exports: [...importAndExportModule, ...importAndExportComponents, TranslateModule],
  providers: [
    {
      provide: PRECONNECT_CHECK_BLOCKLIST,
      useValue: 'https://fakestoreapi.com',
    },
  ],
})
export class SharedModule {}

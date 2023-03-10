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
import { RouterModule } from '@angular/router';
import { BarRatingModule } from "ngx-bar-rating";
import { NoDataComponent } from '../../components/no-data/no-data.component';


const importAndExportComponents = [HeaderComponent, NoDataComponent]

const importAndExportModule = [
  CommonModule,
  FormsModule,
  MaterialModule,
  ReactiveFormsModule,
  NgOptimizedImage,
  RouterModule,
  BarRatingModule
];

@NgModule({
  declarations: [...importAndExportComponents],
  imports: [...importAndExportModule, TranslateModule],
  exports: [...importAndExportModule, ...importAndExportComponents, TranslateModule],
  providers: [
    {
      provide: PRECONNECT_CHECK_BLOCKLIST,
      useValue: 'https://fakestoreapi.com',
    },
  ],
})
export class SharedModule {}

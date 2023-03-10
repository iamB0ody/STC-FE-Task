import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

const importAndExportModule = [CommonModule]

@NgModule({
  declarations: [],
  imports: [...importAndExportModule],
  exports: [...importAndExportModule, TranslateModule],
})
export class SharedModule {}

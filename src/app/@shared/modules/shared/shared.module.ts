import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const importAndExportModule = [CommonModule]

@NgModule({
  declarations: [],
  imports: [...importAndExportModule],
  exports: [...importAndExportModule],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const importAndExportModule = [CommonModule]

@NgModule({
  declarations: [],
  imports: [...importAndExportModule],
  exports: [...importAndExportModule],
})
export class SharedModule {}

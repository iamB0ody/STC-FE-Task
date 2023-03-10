import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const materialModules = [MatSlideToggleModule];

@NgModule({
  declarations: [],
  imports: [...materialModules],
  exports: [materialModules],
})
export class MaterialModule {}

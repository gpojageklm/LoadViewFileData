import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueFormatPipe } from './custom-pipe/value-format.pipe';

@NgModule({
  declarations: [ValueFormatPipe],
  imports: [
    CommonModule
  ],
  exports: [ValueFormatPipe]

})
export class SharedModule { }

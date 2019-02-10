import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { LoadViewComponent } from './load-view.component';
import { UploadDataComponent } from './upload-data/upload-data.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { FileValidator } from './file-validator/file-validator';
import {SharedModule} from '../shared/shared.module';
/**
 * Feature Module for Upload and display Data Feature
 */
@NgModule({
  declarations: [LoadViewComponent, UploadDataComponent, DisplayDataComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [LoadViewComponent],
  providers: [FileValidator]
})
export class LoadViewModule { }

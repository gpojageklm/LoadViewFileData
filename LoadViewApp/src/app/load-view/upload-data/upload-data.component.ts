import { Component, ViewChild, Output,  EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { FileValidator } from '../file-validator/file-validator';
import { Constants } from '../../../config/constants';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

/**
 * Component with input File(csv) and validating & reading file data using Validator Class
 * Emits the records as Array.
 */
export class UploadDataComponent  {

  @Output() fileUploaded = new EventEmitter();

  @ViewChild('fileImportInput')
  fileImportInput: any;

  csvRecords = [];
  errorText: string;

  constructor(private _fileValidator: FileValidator) {}

  /**
   * @param $event--input event value for File
   * @param errorField--reference of html error Element
   * @returns void
   */
  onFileChange($event: any, errorField): void {

    const target = $event.target || $event.srcElement;
    const files = target.files;
    if (files.length === 0) {
      return;
    }
    if (this._fileValidator.isCSVFile(files[0])) {
      const input = $event.target;
      const reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = data => {
        // Casting result to string as ArrayBuffer not support split method
        const csvData = reader.result as string;
        const csvRecordsArray = csvData.split(/\r\n|\n/);
        const headersRow = this._fileValidator.getHeaderArray(csvRecordsArray);

        this.csvRecords = this._fileValidator.getDataRecordsArrayFromCSVFile(
          csvRecordsArray,
          headersRow.length
        );
        this.fileUploaded.emit(this.csvRecords);
      };

      reader.onerror = function() {
        errorField.innerText = Constants.FILE_READER_ERROR_TEXT;
      };
    } else {
      this.errorText =  Constants.NON_CSV_FILE_ERROR_TEXT;
      this.resetFile();
    }
  }

  /**
   * reset csvRecords Object and emits it
   * DataDisplay Component will updated accordingly.
   */
  resetFile() {
    this.fileImportInput.nativeElement.value = '';
    this.csvRecords = [];
    this.fileUploaded.emit(this.csvRecords);
  }

}

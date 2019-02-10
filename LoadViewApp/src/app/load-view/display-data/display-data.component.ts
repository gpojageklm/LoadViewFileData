import { Component, Input, OnChanges , SimpleChanges, ChangeDetectionStrategy} from '@angular/core';
import { Constants } from '../../../config/constants';
import { FileValidator } from '../file-validator/file-validator';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

/**
 * Component to display CSV Records & Filter it based on FilterIndex.
 * FilterIndex is calculated based on filter fieldName configured in Constant.ts
 */
export class DisplayDataComponent implements OnChanges {

  @Input() records: Array<Array<string>> = [];
  filteredRecords: Array<Array<string>> = [];

  private _refFieldIndex: number;
  public get refFieldIndex(): number {
    return this._refFieldIndex;
  }
  public set refFieldIndex(value: number) {
    this._refFieldIndex = value;
  }

  // Placeholder text for filter input textbox.
   defaultFilterText: string = Constants.DEFAULT_FILTER_TEXT;
  // tslint:disable-next-line:no-inferrable-types
  filterResultNotFoundText: string = ' ';

  private _filterTerm: string;
  /**
   * @returns string--value of filtextinput field
   */
  get filterTerm(): string {
    return this._filterTerm;
  }
  /**
   // tslint:disable-next-line:no-redundant-jsdoc
   * @param  value--input value to filter records
   */
  set filterTerm(value: string) {
    this._filterTerm = value;
    if (value) {
      const filterResult = this._fileValidator.calFilteredRecords(value, this.records, this.refFieldIndex);
      // filterResult includes header row and actual data rows
      if (filterResult && (filterResult.length > 1)) {
      this.filteredRecords = filterResult;
      this.filterResultNotFoundText = ' ';
      } else {
        // filterResult includes header row only or empty array
        this.filterResultNotFoundText = Constants.FILTER_RESULT_NOT_FOUND_TEXT;
        this.filteredRecords = [];
      }
    } else {
      // set to entire list records when no value entered or value cleared
      this.filteredRecords = this.records;
      this.filterResultNotFoundText = ' ';
    }
  }
  /**
   * @param private_fileValidator--instance of fileValidator
   */
  constructor(private _fileValidator: FileValidator) { }

  /**
   * @param changes--simpleChanges Object of 'record' change property
   */
  ngOnChanges(changes: SimpleChanges) {
    if (!changes.records) {
      return;
    }
    if (!Array.isArray(changes.records.currentValue)) {
      return;
    }
    this.filteredRecords = changes.records.currentValue;
    this.records = this.filteredRecords;
    if (this.records[0]) {
    this.refFieldIndex = this._fileValidator.getFilterFieldIndex(this.records[0]);
    }
    this.filterTerm = '';
  }

}




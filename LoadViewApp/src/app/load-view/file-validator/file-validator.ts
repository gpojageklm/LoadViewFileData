import { Injectable } from '@angular/core';
import { Constants } from '../../../config/constants';

/**
 * class to provide csv validation
 * and other utility methods for file data reading
 */
@Injectable()
export class FileValidator {

    constructor() {}

    /**
     * @param file--file input to validate with file extension
     */
    isCSVFile(file: any): boolean {
      return file.name.endsWith('.csv');
    }

    /**
     * @param csvRecordsArr--array of records elements from csv
     */
    getHeaderArray(csvRecordsArr: any): Array<string> {
      const headerArray = [];
      if (csvRecordsArr.length > 0) {
        const headers = csvRecordsArr[0].split(',');
        for (let j = 0; j < headers.length; j++) {
          headerArray.push(headers[j]);
        }
      }
      return headerArray;
    }

    /**
     * @param csvRecordsArray--array of array with string values from csv.
     * @param headerLength--count of header fields
     */
    getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any): Array<Array<string>> {
      const dataArr = [];

      for (let i = 0; i < csvRecordsArray.length; i++) {
          const data = csvRecordsArray[i].split(',');
          if (data.length === headerLength) {
            const col = [];
            for (let j = 0; j < data.length; j++) {
              if (data[j]) {
                if (data[j].charAt(0) === '\"' && data[j].charAt(data[j].length - 1) === '\"') {
                data[j] = data[j].toString().substring(1, data[j].length - 1);
                }
              }
              col.push(data[j]);
            }
            dataArr.push(col);
          }
      }
      return dataArr;
    }

    /**
     * @param searchString- search text provided by user
     * @param records--records array input for filtering
     * @param refFieldIndex--index of field based on which filtering should be done
     */
    calFilteredRecords(searchString: string, records: Array<Array<string>>, refFieldIndex: number): Array<Array<string>> {
      const resArr = [];

      if (searchString && searchString.length > 0) {
          if (Array.isArray(records) && (records.length > 0) ) {
            resArr.push(records[0]);
          }
          for (let i = 1; i < records.length; i++) {
            if (records[i][refFieldIndex] ) {
              if (records[i][refFieldIndex].toLowerCase().trim() === searchString.toLowerCase().trim()) {
               resArr.push(records[i]);
              }
            }
          }
      }
      return resArr;
   }

   /**
    * @param recordHeaderArray--Array of header elements
    * @returns number--index of field for filtering records
    */
  getFilterFieldIndex(recordHeaderArray): number {
    for (let i = 0; i < recordHeaderArray.length; i++) {
      if (recordHeaderArray[i] === Constants.FILTER_FIELD_NAME) {
        return i;
      }
    }
  }

}

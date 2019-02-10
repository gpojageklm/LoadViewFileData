import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Constants } from '../../../config/constants';

@Pipe({
  name: 'valueFormat'
})
/**
 * Pipe transform Date Type to specific format
 * other values returns as provided
 */
export class ValueFormatPipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value === 'string' && Constants.REGEX_DATE_FORMAT.test(value)) {
      return super.transform(value, Constants.DATE_FORMAT);
    }
    return value;
  }

}

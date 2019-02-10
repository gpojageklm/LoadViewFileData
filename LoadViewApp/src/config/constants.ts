/**
 * Class for Application level configurations
 */
export class Constants {
  static FILE_READER_ERROR_TEXT = 'unable to read file';
  static NON_CSV_FILE_ERROR_TEXT = 'Please import csv file';
  static FILTER_FIELD_NAME = 'Issue count';
  static DEFAULT_FILTER_TEXT = 'Filter by ' + Constants.FILTER_FIELD_NAME;
  static FILTER_RESULT_NOT_FOUND_TEXT = 'No result matching with filter criteria';
  static REGEX_DATE_FORMAT = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
  static DATE_FORMAT = 'medium';

}

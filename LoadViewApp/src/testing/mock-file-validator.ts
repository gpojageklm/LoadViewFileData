export class MockFileValidator {
  calFilteredRecords( value) {
    if (value === '5') {
      return  [
        ['Maarten', 'abc', '2' , '19-02-1986'],
        [ 'Joris', 'xyz', '5' , '12-03-1987'],
        ];
    } else {
      return [];
    }


  }
}

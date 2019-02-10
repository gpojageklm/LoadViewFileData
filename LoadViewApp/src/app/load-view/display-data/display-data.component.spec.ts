import { ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { DisplayDataComponent } from './display-data.component';
import {FormsModule} from '@angular/forms';
import {FileValidator} from '../file-validator/file-validator';
import { Constants } from '../../../config/constants';
import { SharedModule } from 'src/app/shared/shared.module';
import { Component, ViewChild } from '@angular/core';
import {MockFileValidator} from '../../../testing/mock-file-validator';

describe('DisplayDataComponent', () => {
  let component: DisplayDataComponent;
  let fixture: ComponentFixture<DisplayDataComponent>;

  const mockRecordData = [
                           ['First name', 'Sur name', 'Issue count' , 'Date of birth'],
                           ['Maarten', 'abc', '2' , '19-02-1986'],
                           [ 'Joris', 'xyz', '5' , '12-03-1987'],
                           [ 'Michael', 'mnp', '7' , '12-03-1987']
                         ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, SharedModule],
      declarations: [DisplayDataComponent,TestHostComponent],
      providers: [ { provide: FileValidator, useClass: MockFileValidator }]
    });
});


beforeEach(() => {
  fixture = TestBed.createComponent(DisplayDataComponent);
  component = fixture.componentInstance;
});

 /**
  * Use host Componet  for change detection and checking ngOnChange Called
  */
 /* it('should call ngOnChanges and set records', () => {
    const parentFixture = TestBed.createComponent(TestHostComponent);
    const hostComponent = parentFixture.componentInstance;
    hostComponent.data =  mockRecordData;
    spyOn(hostComponent.displayDataComponent, 'ngOnChanges').and.callThrough();
    parentFixture.detectChanges();
    expect(hostComponent.displayDataComponent.ngOnChanges).toHaveBeenCalled();
    expect(hostComponent.displayDataComponent.records.length).toEqual(mockRecordData.length);
});*/

it('should render data-table element on view', () => {
  component.filteredRecords = mockRecordData;
  fixture.detectChanges();
  const dataTableNode = fixture.debugElement.query(By.css('.data-table')).nativeElement;
  expect(dataTableNode).toBeDefined();
});

it('should filter results', () => {
  component.filteredRecords = mockRecordData;
  component.records = mockRecordData;
  component.refFieldIndex = 2;
  fixture.detectChanges();
  const input = fixture.debugElement.query(By.css('input[name="filterTerm"]')).nativeElement;
  input.value = '5';
  input.dispatchEvent(new Event('input'));
  fixture.detectChanges();
  expect(component.filteredRecords.length).toEqual(2);
});

it('should display error text when input filter value not matching data available ', () => {
  component.filteredRecords = mockRecordData;
  component.filterTerm = '6';
  fixture.detectChanges();
  const errorElem = fixture.debugElement.query(By.css('.no-result')).nativeElement;
  expect(errorElem.innerText).toBe(Constants.FILTER_RESULT_NOT_FOUND_TEXT);
});

/**
 * Host component to test ngOnChanges
 */
@Component({
  selector: `app-host-component`,
  template: `<app-display-data></app-display-data>`
})
class TestHostComponent {
  @ViewChild(DisplayDataComponent)
  public displayDataComponent: any;
  data: Array<Array<string>> = [];
  public DisplayDataComponent: DisplayDataComponent;
}

});

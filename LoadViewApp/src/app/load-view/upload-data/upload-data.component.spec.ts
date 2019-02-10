import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { UploadDataComponent } from './upload-data.component';
import {FormsModule} from '@angular/forms';
import {FileValidator} from '../file-validator/file-validator';
import {MockFileValidator} from '../../../testing/mock-file-validator';

describe('UploadDataComponent', () => {
  let component: UploadDataComponent;
  let fixture: ComponentFixture<UploadDataComponent>;
  const mockRecordData = [
                            ['First name', 'Sur name', 'Issue count' , 'Date of birth'],
                            ['Maarten', 'abc', '2' , '19-02-1986'],
                            [ 'Joris', 'xyz', '5' , '12-03-1987'],
                            [ 'Arnold', 'bond', '7' , '12-03-1987']
                         ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [UploadDataComponent],
      providers: [ { provide: FileValidator, useClass: MockFileValidator }]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDataComponent);
    component = fixture.componentInstance;

  });

  it('should create UploadDataComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should file change event arrive in handler', () => {
    const input  = fixture.debugElement.query(By.css('input[type=file]')).nativeElement;
    spyOn(component, 'onFileChange');
    input.dispatchEvent(new Event('change'));
    expect(component.onFileChange).toHaveBeenCalled();
  });

  it('should reset event arrive in handler', () => {
    const input  = fixture.debugElement.query(By.css('.btn-reset')).nativeElement;
    spyOn(component, 'resetFile');
    input.dispatchEvent(new Event('click'));
    expect(component.resetFile).toHaveBeenCalled();
  });

  it('should reset csvRecord to empty array on click reset', () => {
    component.csvRecords = mockRecordData;
    const button =  fixture.debugElement.query(By.css('.btn-reset')).nativeElement;
    button.click();
    fixture.detectChanges();
    expect(component.csvRecords.length).toEqual(0);
});

});

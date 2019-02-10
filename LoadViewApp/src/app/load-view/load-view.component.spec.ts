import { TestBed, async } from '@angular/core/testing';
import { LoadViewComponent } from './load-view.component';
import { LoadViewModule } from './load-view.module';

describe('LoadViewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ LoadViewModule ]
    }).compileComponents();
  }));

  it('should create the LoadViewComponent', async(() => {
    const fixture = TestBed.createComponent(LoadViewComponent);
    const cmp = fixture.debugElement.componentInstance;
    expect(cmp).toBeTruthy();
  }));

  it('should have the UploadDataComponent and DisplayDataComponent', async(() => {
    const fixture = TestBed.createComponent(LoadViewComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-upload-data')).not.toBe(null);
    expect(compiled.querySelector('app-display-data')).not.toBe(null);
  }));

});

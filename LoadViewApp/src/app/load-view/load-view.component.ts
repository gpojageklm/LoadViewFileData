import { Component } from '@angular/core';

@Component({
  selector: 'app-load-view',
  templateUrl: './load-view.component.html',
  styleUrls: ['./load-view.component.scss']
})
export class LoadViewComponent {
    data: Array<Array<string>> = [];
    constructor() { }

    /**
     * set the input data value
     * @param fileData--emitted Array<Array<string>> data from upload component
     */
    onFileUploaded(fileData) {
      this.data = fileData;
    }
  }



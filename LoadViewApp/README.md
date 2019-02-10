# LoadViewApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

# Dependency 
  This project build using node 10.14.2
  npm version 6.4.1
  express version 4.16.4

## SetUp Steps to run as production
    I have used ExpressJS framework to Deploy this App.
    Motive behind using Express JS Web Framework of Node
       1. Dedicate proper backend server as it is prod build 

    The server.js file uses environment variable port (process.env.port) Or 3000
  
   Inorder to run app as prod (it will fetch optimized version from dist folder)
   Please follow below process to run as prod on local system
##  Commands to setup on local and running as prod   
    git clone repository
    set LoadViewApp Folder as working directory
    npm install
    ng build --prod
    node server.js
    open http://localhost:3000

## Functional Description:
   This is Front end Web Application developed using Angular 7 framework.
   It reads the CSV File and Display Data on View.
   User Can filter Data based on filterFieldName(Configured in Constants.ts)
   Currently it is set as "Issue count" which can be configured as per requirement.
   It will display user friendly message when entered criteria not providing any result.
   It will display complete result once user clear out filter field input.
   User can reset(remove) the data from view by clicking  Reset button.

 ## Technical Description :
    This app consist of single Feature Module --LoadView Module.
    LoadViewComponent--Main Feature Component
    Two Child Components are:
    UploadDataComponent --Upload File & emit the File Data
    DisplayDataComponent--To display input data & filter it.

    I have used OnPush changeDetectionStrategy in DisplayDataComponent & Custom pure pipe for tranforming date value .
    Configuration are defined in Constants.ts(static contents,texts,FilterFieldName etc)
    
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

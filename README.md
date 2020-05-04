<h1>Use following command to run the this angular project in docker container</h1>
<h3>
docker build . -t emp-front <br>
docker run --name emp-front -p 8080:80 -d emp-front
</h3>

<h1>Hit the following link</h1>
<a href="http://localhost:8080/">http://localhost:8080/</a>


# EmpFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


<HR>
=================================================Integrate Angular And Sonarqube=========================================================================
<H2>How to integrate the Angular And Sonarqube</H2>
<br>
For more details please follow the below link-
https://medium.com/@learning.bikash/angular-code-coverage-with-sonarqube-d2283442080b
<br>

To make you very clear and simple, let's break this process into the below simple steps,

 1.   Create an Angular component <br>
 2.   Write the Unit testing ( using Karma and Jasmine )<br>
 3.   Generate Karma code coverage<br>
 4.   Install Sonarqube<br>
 5.   Configure Sonar with Angular<br>
 6.   Integrate Karma code coverage with Sonarqube<br>

Step 1: ( Create an Angular component)

ng new AngularSonarQubeIntegrationProject
<br>
Create new component as test
ng g c test
---------------------------------output of above test component generate ------------------------------
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
-----------------------------------------------------------------------
Step 2: ( Write the Unit testing )
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
------------------------------------------------------------------------
Step 3: ( Generate Karma code coverage )
   ng test --code-coverage
OR  
      <br>If you wish to stop the Karma server post the code coverage generation or all test cases execution then run,
   ng test --watch=false --code-coverage

These above any command will generate coverage folder at root level

--------------------------------------------------------------------------
Step 4: ( Install Sonarqube )
Once sonarcube is available at http://localhost:9000
Do the next step
-----------------------------------------------------
Step 5: ( Configure Sonar with Angular )
sonar:scanner need to be added to angular project. I order to do this please run below command

npm install sonar-scanner --save-dev
This will make entry of sonar-scanner in devDependencies sectin of package.json file
<br>
Create a file called sonar-project.properties in your Angular root directory and add below attributes,
------------------------------------sonar-project.properties-----------------------------------
sonar.host.url=http://localhost:9000
sonar.login=83945d12b1480fed9af76ba08e64d7d468d0403b
#sonar.login=amsidhlokhande
#sonar.password=
sonar.projectKey=AngularSonarQubeIntegrationProject
sonar.projectName=AngularSonarQubeIntegrationProject
sonar.projectVersion=1.0
sonar.sourceEncoding=UTF-8
sonar.sources=src
sonar.exclusions=**/node_modules/**
sonar.tests=src
sonar.test.inclusions=**/*.spec.ts
sonar.typescript.lcov.reportPaths=coverage/AngularSonarQubeIntegrationProject/lcov.info
sonar.scm.disabled=true
sonar.dynamicAnalysis=reuseReports
------------------------------------------------------------------------------
Step 6: ( Integrate Karma code coverage with Sonarqube )
We have both Karma code coverage and Sonar server ready, now will integrate both using sonar-scanner which we have installed in the previous step.


Add sonar": "sonar-scanner" entry in scripts section of package.json file
Like below<br>
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "sonar": "sonar-scanner"  -------------Added this entry to existing scripts section-----------
    
  }
------------------------------------------------------------------------
Finally, run the below command to integrate the Karma coverage with the Sonar server,

    npm run sonar
<br>
And you will see the result directly on the Sonar server by navigating to 
http://localhost:9000/projects.


<h2>Conclusion<h2>

Let's conclude this, we have four important steps such as,

    Installing the Sonarqube.
    Configuring the Sonar with Angular using sonar-project.properties and installing the sonar-scanner package.
    Getting the Karma code coverage.
    Integrating the Karma code coverage with Sonarqube.







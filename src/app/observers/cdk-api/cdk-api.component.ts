import { Component, OnInit } from '@angular/core';
import { getSupportedInputTypes, supportsPassiveEventListeners } from '@angular/cdk/platform';


@Component({
  selector: 'app-cdk-api',
  templateUrl: './cdk-api.component.html',
  styleUrls: ['./cdk-api.component.css']
})
export class CdkApiComponent implements OnInit {

  constructor() {
    console.log(supportsPassiveEventListeners());
    console.log(getSupportedInputTypes());
  }

  ngOnInit(): void {
  }

}

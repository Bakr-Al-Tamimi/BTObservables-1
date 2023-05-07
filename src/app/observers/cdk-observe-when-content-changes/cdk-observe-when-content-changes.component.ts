import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-observe-when-content-changes',
  templateUrl: './cdk-observe-when-content-changes.component.html',
  styleUrls: ['./cdk-observe-when-content-changes.component.css']
})
export class CdkObserveWhenContentChangesComponent implements OnInit {

  content = 0;
  constructor() {
   setInterval(() => {
     this.content++;
   }, 3000)
 }

  ngOnInit(): void {
  }

}

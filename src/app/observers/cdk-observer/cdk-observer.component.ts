import { Component, OnInit } from '@angular/core';
import {ObserversModule} from '@angular/cdk/observers';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-cdk-observer',
  templateUrl: './cdk-observer.component.html',
  styleUrls: ['./cdk-observer.component.css']
})

export class CdkObserverComponent implements OnInit {
  constructor( private _platform: Platform ) {

  }

  ngOnInit() {
    this.getPlatformBrowser();
    // console.log(this._platform.ANDROID);
    // console.log(this._platform.BLINK);
    // console.log(this._platform.EDGE);
    // console.log(this._platform.FIREFOX);
    // console.log(this._platform.IOS);
    // console.log(this._platform.isBrowser);
    // console.log(this._platform.SAFARI);
    // console.log(this._platform.TRIDENT);
    // console.log(this._platform.WEBKIT);

  }

  getPlatformBrowser(){
    this.deconstructObject(this._platform);
    // console.log();
  }




deconstructObject(obj:Object){
    const arr = [];  
    const keys = Object.keys(obj);
    const sortedKeys = keys.sort();
        for(const key of sortedKeys){
          console.log(key,obj.valueOf());
            arr.push(key);
        }
        return arr;
}
}

enum appPlatform {
  Android = "ANDROID",
  Blink = "BLINK",
  Edge = "EDGE",
  Firefox = "FIREFOX",
  IOS = "IOS",
  Browser = "isBrowser",
  Safari = "SAFARI",
  Trident = "Trident",
  Webkit = "WEBKIT"
}
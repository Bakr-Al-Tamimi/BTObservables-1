import { Component, OnInit } from '@angular/core';
import {ObserversModule} from '@angular/cdk/observers';
import { Platform } from '@angular/cdk/platform';
import { UniversitiesAddressesService } from 'src/app/services/universities-addresses.service';

@Component({
  selector: 'app-cdk-observer',
  templateUrl: './cdk-observer.component.html',
  styleUrls: ['./cdk-observer.component.css']
})

export class CdkObserverComponent implements OnInit {
  private iid = 'CdkObserverComponent';
  public universitiesArray!: [uni];
  panelOpenState = false;

  constructor( private _platform: Platform , public comms : UniversitiesAddressesService) {

  }

  ngOnInit() {
    this.getPlatformBrowser();
    console.log(this.comms.getUniversities());
    // console.log(this._platform.ANDROID);
    // console.log(this._platform.BLINK);
    // console.log(this._platform.EDGE);
    // console.log(this._platform.FIREFOX);
    // console.log(this._platform.IOS);
    // console.log(this._platform.isBrowser);
    // console.log(this._platform.SAFARI);
    // console.log(this._platform.TRIDENT);
    // console.log(this._platform.WEBKIT);
    this.comms.getUniversities().subscribe(value => {
      console.log(value);
      this.universitiesArray = value;
    });
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

interface uni {
domains : ['string'];
country : string;
alpha_two_code : string;
state_provice : string;
web_pages: [string];
name: string;
}

// { "domains": [ "aabfs.org" ], "country": "Jordan", "alpha_two_code": "JO", "state-province": null, "web_pages": [ "http://www.aabfs.org/" ], "name": "Arab Academy for Banking and Financial Sciences" }
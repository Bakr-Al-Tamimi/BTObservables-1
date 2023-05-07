import { Component, OnInit } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-bounds-of-browser-viewport',
  templateUrl: './bounds-of-browser-viewport.component.html',
  styleUrls: ['./bounds-of-browser-viewport.component.css']
})
export class BoundsOfBrowserViewportComponent implements OnInit {

  constructor( private _ruler: ViewportRuler ) {}

  ngOnInit() {
    // { width, height }
    console.log(this._ruler.getViewportSize());

    // { bottom, height, left, right, top, width }
    console.log(this._ruler.getViewportRect());

    // { top, left }
    console.log(this._ruler.getViewportScrollPosition());

    // native resize event object
    this._ruler.change().subscribe(resizeEvent => console.log(resizeEvent));
  }
}

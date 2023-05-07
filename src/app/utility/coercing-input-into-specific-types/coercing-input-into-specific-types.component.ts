import { Component, OnInit } from '@angular/core';
import {
  coerceArray,
  coerceBooleanProperty, 
  coerceNumberProperty,
} from '@angular/cdk/coercion'; 

@Component({
  selector: 'app-coercing-input-into-specific-types',
  templateUrl: './coercing-input-into-specific-types.component.html',
  styleUrls: ['./coercing-input-into-specific-types.component.css']
})
export class CoercingInputIntoSpecificTypesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Coerces a data-bound value (typically a string) to a boolean
console.log(coerceBooleanProperty('true'));

// Wraps the provided value in an array, unless the provided value is an array
coerceArray('value');
let fallbackValue = 0;
// Coerces a data-bound value (typically a string) to a number.
coerceNumberProperty('3');
coerceNumberProperty('123hello', fallbackValue)
  }

}

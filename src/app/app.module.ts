import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CdkModule } from './material/cdk.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { ItemsDataArrayComponent } from './data/items-data-array/items-data-array.component';
import { CdkDragDropConnectedSortingExampleComponent } from './cdk-examples/cdk-drag-drop-connected-sorting-example/cdk-drag-drop-connected-sorting-example.component';
import { CdkObserverComponent } from './observers/cdk-observer/cdk-observer.component';
import { CdkApiComponent } from './observers/cdk-api/cdk-api.component';
import { BoundsOfBrowserViewportComponent } from './utility/bounds-of-browser-viewport/bounds-of-browser-viewport.component';
import { CoercingInputIntoSpecificTypesComponent } from './utility/coercing-input-into-specific-types/coercing-input-into-specific-types.component';
import { CdkObserveWhenContentChangesComponent } from './observers/cdk-observe-when-content-changes/cdk-observe-when-content-changes.component';
import {HelloComponent} from './observers/cdk-observe-when-content-changes/hello'



@NgModule({
  declarations: [
    AppComponent,
    ItemsDataArrayComponent,
    CdkDragDropConnectedSortingExampleComponent,
    CdkObserverComponent,
    CdkApiComponent,
    BoundsOfBrowserViewportComponent,
    CoercingInputIntoSpecificTypesComponent,
    CdkObserveWhenContentChangesComponent,
    HelloComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CdkModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

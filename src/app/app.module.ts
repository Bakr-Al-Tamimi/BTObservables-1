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




@NgModule({
  declarations: [
    AppComponent,
    ItemsDataArrayComponent,
    CdkDragDropConnectedSortingExampleComponent,
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

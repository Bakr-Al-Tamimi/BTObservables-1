import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { BidiModule } from '@angular/cdk/bidi';
import { ClipboardModule } from '@angular/cdk/clipboard';

import {
    BooleanInput,
    NumberInput,
    _isNumberValue,
    coerceArray,
    coerceBooleanProperty,
    coerceCssPixelValue,
    coerceElement,
    coerceNumberProperty,
    coerceStringArray,
} from '@angular/cdk/coercion';

import {
    ArrayDataSource,
    CollectionViewer,
    DataSource,
    ListRange,
    SelectionChange,
    SelectionModel,
    TreeDataNodeFlattener,
    UniqueSelectionDispatcher,
    UniqueSelectionDispatcherListener,
    _DisposeViewRepeaterStrategy,
    _RecycleViewRepeaterStrategy,
    _VIEW_REPEATER_STRATEGY,
    _ViewRepeater,
    _ViewRepeaterItemChange,
    _ViewRepeaterItemChanged,
    _ViewRepeaterItemContext,
    _ViewRepeaterItemContextFactory,
    _ViewRepeaterItemInsertArgs,
    _ViewRepeaterItemValueResolver,
    _ViewRepeaterOperation,
    getMultipleValuesInSingleSelectionError,
    isDataSource,
} from '@angular/cdk/collections';

import { ContentContainerComponentHarness } from '@angular/cdk/testing';
// import { DialogModule } from '@angular/cdk/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
// import { CdkListboxModule } from '@angular/cdk/listbox';
// import { CdkMenuModule } from '@angular/cdk/menu';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { TextFieldModule } from '@angular/cdk/text-field';
import { CdkTreeModule } from '@angular/cdk/tree';

@NgModule({
    declarations: [],
    imports: [
        A11yModule,
        CdkAccordionModule,
        BidiModule,
        ClipboardModule,
        // DialogModule,
        DragDropModule,
        LayoutModule,
        // CdkListboxModule,
        // CdkMenuModule,
        ObserversModule,
        OverlayModule,
        PlatformModule,
        PortalModule,
        ScrollingModule,
        CdkStepperModule,
        CdkTableModule,
        TextFieldModule,
        CdkTreeModule,
    ],
    exports: [
        A11yModule,
        CdkAccordionModule,
        BidiModule,
        ClipboardModule,
        // DialogModule,
        DragDropModule,
        LayoutModule,
        // CdkListboxModule,
        // CdkMenuModule,
        ObserversModule,
        OverlayModule,
        PlatformModule,
        PortalModule,
        ScrollingModule,
        CdkStepperModule,
        CdkTableModule,
        TextFieldModule,
        CdkTreeModule,
    ]
})

export class CdkModule { }
import { NgModule } from '@angular/core';
import { SortDirectionControlComponent } from './form/sort-direction-control/sort-direction-control.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    SortDirectionControlComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [
    SortDirectionControlComponent,
    LoaderComponent
  ],
})
export class SharedModule { }

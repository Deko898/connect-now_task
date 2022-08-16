import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [LayoutComponent],
})
export class CoreModule {}

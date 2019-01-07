import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { CompanyAchivementComponent } from './company-achivement/company-achivement.component';
import { BaseAppComponent } from './base-app/base-app.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { CompanyOverviewComponent } from './company-overview/company-overview.component';
import {MatDividerModule} from '@angular/material/divider';
import { CompanyHeaderOptionsComponent } from './company-header-options/company-header-options.component';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';

import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompanyAchivementComponent,
    BaseAppComponent,
    CompanyOverviewComponent,
    CompanyHeaderOptionsComponent,
    ContactComponent,
    FooterComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

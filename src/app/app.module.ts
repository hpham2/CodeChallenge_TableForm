import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubmitComponent } from './submit/submit.component';
import { AlertDialog } from './submit/submit.component';


import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule, MatInputModule, MatIconModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';

const appRoutes: Routes = [
  { path: 'dashboard', component: AppComponent },
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  entryComponents: [SubmitComponent, AlertDialog],
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    SubmitComponent,
    AlertDialog,
    MainNavComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatSelectModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [MainNavComponent]
})
export class AppModule { }

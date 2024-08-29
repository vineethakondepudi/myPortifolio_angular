import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MyLoggerModule } from 'my-logger';
import { FormsComponent } from './forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DobComponent } from './dob/dob.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { DateRangeComponent } from './date-range/date-range.component';
import { PracticeComponent } from './practice/practice.component'; 
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EditComponent } from './edit/edit.component';
import { ExpendTableComponent } from './expend-table/expend-table.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';



import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContactComponent } from './contact/contact.component';
import { BioComponent } from './bio/bio.component';
import { AboutComponent } from './about/about.component';
import { AllComponent } from './all/all.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoaderComponent } from './loader/loader.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TableComponent,
    DobComponent,
    DateRangeComponent,
    PracticeComponent,
    EditComponent,
    ExpendTableComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidenavComponent,
    ContactComponent,
    BioComponent,
    AboutComponent,
    AllComponent,
    ProjectsComponent,
    LoaderComponent,
    ContactdetailsComponent
  ],
  imports: [
    BrowserModule,
    MyLoggerModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatExpansionModule,
    AppRoutingModule,
    MatPaginatorModule,
    HttpClientModule,
    MatProgressSpinnerModule, 
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatSnackBarModule,
    MatChipsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

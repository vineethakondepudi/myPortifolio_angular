import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PracticeComponent } from "./practice/practice.component";
import { FormsComponent } from "./forms/forms.component";
import { authGuard } from "./auth.guard";
import { TableComponent } from "./table/table.component";
import { EditComponent } from "./edit/edit.component";
import { ExpendTableComponent } from "./expend-table/expend-table.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { ContactComponent } from "./contact/contact.component";
import { BioComponent } from "./bio/bio.component";
import { AboutComponent } from "./about/about.component";
import { AllComponent } from "./all/all.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactdetailsComponent } from "./contactdetails/contactdetails.component";


const routes: Routes = [
  // {path:"expend", component: ExpendTableComponent},
  // {path:"table", component: TableComponent},
  // { path: 'edit/:id', component: EditComponent },
  // { path: "form", component: FormsComponent },
  // { path: "practice", component: PracticeComponent, canActivate: [authGuard] },
  {
    path: "", component: MainComponent, children: [
      { path: "bio", component: BioComponent },
      { path: "about", component: AboutComponent },
      { path: "contact", component: ContactComponent },
      { path: "contactDetails", component: ContactdetailsComponent },
      { path: "all", component: AllComponent },
      { path: "project", component: ProjectsComponent },
      { path: "", redirectTo: "bio", pathMatch: "full" }
    ]
  }, 
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

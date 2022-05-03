import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CascadingDropdownComponent } from './cascading-dropdown/cascading-dropdown.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { FormControlsGroupsComponent } from './form-controls-groups/form-controls-groups.component';
import { FormcontrolsComponent } from './formcontrols/formcontrols.component';
import { GetsetValuesComponent } from './getset-values/getset-values.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NestedFormGroupComponent } from './nested-form-group/nested-form-group.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'header',component:HeaderComponent},
  {path:'home',component:HomeComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'form',component:FormcontrolsComponent},
  {path:'getset',component:GetsetValuesComponent},
  {path:'formcontrols',component:FormControlsGroupsComponent},
  {path:'dropdown',component:CascadingDropdownComponent},
  {path:'Expansion',component:ExpansionPanelComponent},
  {path:'DynamicFC',component:DynamicFormControlComponent},
  {path:'NestedFC',component:NestedFormGroupComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { AppComponent } from './app.component';
import { ToolsComponent } from './components/tools/tools.component';
import { HomeComponent } from './components/home/home.component';
import { SupportComponent } from './components/support/support.component';

export const routes: Routes = [
   {path:'',component:HomeComponent},
   {path:'tools',component:ToolsComponent},
   {path:'cursos',component:CursosComponent},
   {path:'support',component:SupportComponent},
];

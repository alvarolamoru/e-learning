import { Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { AppComponent } from './app.component';
import { ToolsComponent } from './components/tools/tools.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
   {path:'',component:HomeComponent},
   {path:'tools',component:ToolsComponent},
   {path:'cursos',component:CursosComponent},
];

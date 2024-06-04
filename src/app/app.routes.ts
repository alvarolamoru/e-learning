import { Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { AppComponent } from './app.component';
import { ToolsComponent } from './components/tools/tools.component';
import { HomeComponent } from './components/home/home.component';
import { SupportComponent } from './components/support/support.component';
import { DemoELearningComponent } from './components/demo-e-learning/demo-e-learning.component';
import { PruebaComponent } from './prueba/prueba.component';

export const routes: Routes = [
<<<<<<< HEAD
   {path:'',component:AppComponent},
   {path:'cursos',component:CursosComponent},

=======
   {path:'',component:HomeComponent},
   {path:'tools',component:ToolsComponent},
   {path:'cursos',component:CursosComponent},
   {path:'support',component:SupportComponent},
   {path:'demo',component:DemoELearningComponent},
<<<<<<< HEAD

=======
>>>>>>> 1a0487e14ba03b90ffe1cbe7e515ec9048004a64
>>>>>>> 4c26dcce68070dde0620eb57cfcec894197897f5
];

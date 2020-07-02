import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdinateurComponent } from './components/ordinateur/ordinateur.component';
import { OrdinateurDetailComponent } from './components/ordinateur-detail/ordinateur-detail.component';
import { OrdinateurAddComponent } from './components/ordinateur-add/ordinateur-add.component';
import { OrdinateurEditComponent } from './components/ordinateur-edit/ordinateur-edit.component';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  { path: '', redirectTo: 'ordinateur', pathMatch: 'full'}, 
  // { path: 'menu', component: MenuComponent },
  { path: 'ordinateur', component: OrdinateurComponent},
  { path: 'ordinateur/add', component: OrdinateurAddComponent},
  { path: 'ordinateur/:id', component: OrdinateurDetailComponent },
  { path: 'ordinateur/edit/:id' , component: OrdinateurEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

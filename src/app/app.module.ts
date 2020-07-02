import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdinateurComponent } from './components/ordinateur/ordinateur.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { OrdinateurDetailComponent } from './components/ordinateur-detail/ordinateur-detail.component';
import { OrdinateurAddComponent } from './components/ordinateur-add/ordinateur-add.component';
import { OrdinateurEditComponent } from './components/ordinateur-edit/ordinateur-edit.component';
import { MenuComponent } from './components/menu/menu.component'; 
//import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    OrdinateurComponent,
    OrdinateurDetailComponent,
    OrdinateurAddComponent,
    OrdinateurEditComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    //ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

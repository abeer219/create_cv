import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EnglishComponent } from './english/english.component';
import { ArabicComponent } from './arabic/arabic.component';
import { MycvComponent } from './mycv/mycv.component';


import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ArabiccvComponent } from './arabiccv/arabiccv.component';


const routes:Routes = [
  {path:'' , redirectTo:'home', pathMatch:'full'},
  {path:'login', component:LoginComponent },
  {path:'register', component:RegisterComponent },
  {path: 'english', component:EnglishComponent },
  {path:'arabic', component:ArabicComponent },
  {path:'home', component:HomeComponent },
  {path:'arabiccv', component:ArabiccvComponent },
  {path:'mycv', component:MycvComponent }
  

  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    EnglishComponent,
    ArabicComponent,
    MycvComponent,
    ArabiccvComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

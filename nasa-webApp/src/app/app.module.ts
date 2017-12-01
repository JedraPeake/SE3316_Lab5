import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ValidateService } from './services/validate.service';
import { ImageService } from './services/image.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CreateCollectionComponent } from './create-collection/create-collection.component';

const webAppRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'createCollection', component: CreateCollectionComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    CreateCollectionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(webAppRoutes), 
    FlashMessagesModule.forRoot()
  ],
  providers: [ImageService, ValidateService, AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }

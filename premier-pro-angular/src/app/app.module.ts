import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Afin de pouvoir utiliser le two-way binding (liaison à double sens (liaison par propriété et liaison par événement))

// Components
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';

// Routes
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

// Services
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [  // Création d'une const de type Routes importé depuis angular/router
  { path: 'appareils', component: AppareilViewComponent},
  { path: 'appareils/:id', component: SingleAppareilComponent},
  { path: 'auth', component: AuthComponent},
  { path: '', component: AppareilViewComponent} // Le path vide correspond simplement à localhost:4200(racine de l'api)
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // Cela dit au RouteurModule d'angular que toutes les routes enregistrées sont dans la const appRoutes
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

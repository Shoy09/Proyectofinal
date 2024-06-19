import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirigir a /login por defecto
    { path: 'login', component: LoginComponent },

    { path: 'home', component: HomeComponent },
    { path: 'favoritos', component: FavoritosComponent },

];

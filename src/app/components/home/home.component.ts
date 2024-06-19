import { Component } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [FormsModule, CommonModule, FooterComponent, NavbarComponent]
})
export class HomeComponent {
  heroName: string = ''; // Definición de la propiedad heroName
  heroes: any[] = [];

  constructor(private heroService: MarvelService) {}

  // Método para buscar héroes y mostrarlos
  showCorrespondingHeros() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    this.heroService.searchHeroes(name)
      .then(response => {
        // Procesar la respuesta y mostrar los héroes en el HTML
        console.log(response);
        // Aquí deberías manipular el DOM para mostrar los héroes en tu componente HTML
      })
      .catch(error => {
        console.error('Error fetching heroes:', error);
        // Manejar el error, por ejemplo, mostrar un mensaje de error en tu HTML
      });
  }

  searchHeroes() {
    if (this.heroName.trim() !== '') {
      this.heroService.searchHeroes(this.heroName)
        .then(response => {
          console.log(response);
          if (response.response === 'success') {
            this.heroes = response.results;
          } else {
            this.heroes = [];
          }
        })
        .catch(error => {
          console.error('Error fetching heroes:', error);
          // Manejo de error, por ejemplo, mostrar un mensaje al usuario
        });
    } else {
      this.heroes = [];
    }
  }

  // Función para agregar a favoritos
  addFavourite(id: number) {
    // Lógica para agregar a favoritos
  }

  // Función para mostrar detalles del héroe
  showDetails(id: number) {
    // Lógica para mostrar detalles del héroe
  }
}
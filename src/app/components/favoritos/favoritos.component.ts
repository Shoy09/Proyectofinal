import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-favoritos',
    standalone: true,
    templateUrl: './favoritos.component.html',
    styleUrl: './favoritos.component.css',
    imports: [NavbarComponent, FooterComponent]
})
export class FavoritosComponent {

}

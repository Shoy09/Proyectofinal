import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initializeInputs();
  }

  initializeInputs() {
    const inputs = document.querySelectorAll(".input");

    inputs.forEach(input => {
      input.addEventListener("focus", this.addcl); // Usando this.addcl
      input.addEventListener("blur", this.remcl); // Usando this.remcl
    });
  }

  addcl(event: Event) {
    const target = event.target as HTMLElement;
    if (target.parentNode?.parentNode) {
      let parent = target.parentNode.parentNode as HTMLElement;
      parent.classList.add("focus");
    }
  }

  remcl(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.parentNode?.parentNode) {
      let parent = target.parentNode.parentNode as HTMLElement;
      if (target.value === "") {
        parent.classList.remove("focus");
      }
    }
  }
  login() {
    // Lógica de autenticación y redirección
    this.router.navigate(['/home']); // Redirige a la ruta '/home'
  }
}
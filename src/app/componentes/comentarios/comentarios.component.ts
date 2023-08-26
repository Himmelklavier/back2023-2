import { Component } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {
  opinion: string = ''; // Propiedad para almacenar la opinión
  comentarios: string[] = []; // Array para almacenar los comentarios

  enviarOpinion() {
    this.comentarios.push(this.opinion); // Agrega la opinión al array de comentarios
    this.opinion = ''; // Limpia el campo de opinión después de agregarlo
  }

  limpiarFormulario() {
    this.opinion = ''; // Limpia el campo de opinión
  }
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  activeSlideIndex = 0;

  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.carouselImages.length;
  }

  prevSlide() {
    this.activeSlideIndex = (this.activeSlideIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }


  carouselImages = [
    'assets\\images\\S23-1.jpg',
    'assets\\images\\S23-2.jpg',
    'assets\\images\\S23-3.jpg',
    'assets\\images\\S23-4.jpg',
    'assets\\images\\S23-5.jpg',
    'assets\\images\\S23-6.jpg',
  ];
}

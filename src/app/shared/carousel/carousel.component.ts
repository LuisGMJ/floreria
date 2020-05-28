import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  titleCarousel = 'Encuentra los mejores arreglos florales aqui';
  itemsPerSlide = 2;

  slides = [
    { image: 'https://www.lafloreriademexico.com/newsl/2slider/encabezado-lfm-es2.jpg'},
    { image: 'https://www.lafloreriademexico.com/newsl/cumple/portada-es-6.jpg'},
    { image: 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15732717_1870118476557557_1972090866140410241_o.jpg?_nc_cat=102&_nc_sid=e007fa&_nc_ohc=on2J54Yqj1gAX94-woY&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=b59afc2718a9b4e489f5785c2fcc7836&oe=5ED7F14F'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

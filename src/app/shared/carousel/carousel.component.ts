import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  itemsPerSlide = 2;

  slides = [
    { image: 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15774833_1870118469890891_4378935360377216784_o.jpg?_nc_cat=109&_nc_sid=e007fa&_nc_ohc=65Sa121IVuwAX9hKMWY&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=799751f15beed1de9f1bb2556f2056b4&oe=5EDAEAF9'},
    { image: 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15800516_1873474552888616_4606950529000619231_o.jpg?_nc_cat=106&_nc_sid=dd9801&_nc_ohc=qndyhRLFwfkAX_YquJv&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=71a123180a075c9a9a6d2c0eb5fe1d43&oe=5EDAAE1C'},
    { image: 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15732717_1870118476557557_1972090866140410241_o.jpg?_nc_cat=102&_nc_sid=e007fa&_nc_ohc=on2J54Yqj1gAX94-woY&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=b59afc2718a9b4e489f5785c2fcc7836&oe=5ED7F14F'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

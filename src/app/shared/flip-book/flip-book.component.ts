import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flip-book',
  templateUrl: './flip-book.component.html',
  styleUrls: ['./flip-book.component.css']
})
export class FlipBookComponent implements OnInit {

  arreglos = [
    {
      title: 'Ramo Bouquetaaa jajajaj aj',
      price: '$690.00 MXN',
      img: 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg'
    },
    {
      title: 'Ramo cascada',
      price: '$630.00 MXN',
      img: 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15723651_1870120183224053_4727401309801192364_o.jpg?_nc_cat=109&_nc_sid=e007fa&_nc_ohc=fEnOdnxTfLQAX8eEE6z&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=f04f4968a8860b4a0a1b4052b2c60421&oe=5EDAA36F'
    },
    {
      title: 'Ramo Berry Fest',
      price: '$1250.00 MXN',
      img: 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15774868_1870118506557554_6797741690748169470_o.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=7v5jLeBUhd8AX-36KGo&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=f1bad5e2cf794129b01028a5b5528c35&oe=5ED836C8'
    },
    {
      title: 'Ramo rosmelia',
      price: '$1150.00 MXN',
      img: 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15774993_1870118606557544_4280617496849621820_o.jpg?_nc_cat=105&_nc_sid=e007fa&_nc_ohc=IUlfcfvOmqgAX9r2QkD&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=0920f0f283930af3c1c4ee9dbd7564ae&oe=5EDA2C34'
    },
    {
      title: 'Rosadas',
      price: '$690.00 MXN',
      img: 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15676556_1870118853224186_3105862943381986603_o.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=wFvlLQoY0VwAX80JI_J&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=fdd3a1d02f78bc4f9a85accdc5d7b392&oe=5EDAC242'
    },
    {
      title: 'Ramo Bouquet jajajaj aj',
      price: '$690.00 MXN',
      img: 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg'
    },
    {
      title: 'Ramo cascada',
      price: '$630.00 MXN',
      img: 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15723651_1870120183224053_4727401309801192364_o.jpg?_nc_cat=109&_nc_sid=e007fa&_nc_ohc=fEnOdnxTfLQAX8eEE6z&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=f04f4968a8860b4a0a1b4052b2c60421&oe=5EDAA36F'
    },
    {
      title: 'Ramo Berry Fest',
      price: '$1250.00 MXN',
      img: 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15774868_1870118506557554_6797741690748169470_o.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=7v5jLeBUhd8AX-36KGo&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=f1bad5e2cf794129b01028a5b5528c35&oe=5ED836C8'
    },
    {
      title: 'Ramo rosmelia',
      price: '$1150.00 MXN',
      img: 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15774993_1870118606557544_4280617496849621820_o.jpg?_nc_cat=105&_nc_sid=e007fa&_nc_ohc=IUlfcfvOmqgAX9r2QkD&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=0920f0f283930af3c1c4ee9dbd7564ae&oe=5EDA2C34'
    },
    {
      title: 'Rosadas',
      price: '$690.00 MXN',
      img: 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15676556_1870118853224186_3105862943381986603_o.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=wFvlLQoY0VwAX80JI_J&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=fdd3a1d02f78bc4f9a85accdc5d7b392&oe=5EDAC242'
    },
    {
      title: 'Ramo Bouquet jajajaj aj',
      price: '$690.00 MXN',
      img: 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg'
    },
    {
      title: 'Ramo cascada',
      price: '$630.00 MXN',
      img: 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15723651_1870120183224053_4727401309801192364_o.jpg?_nc_cat=109&_nc_sid=e007fa&_nc_ohc=fEnOdnxTfLQAX8eEE6z&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=f04f4968a8860b4a0a1b4052b2c60421&oe=5EDAA36F'
    },
    {
      title: 'Ramo Berry Fest',
      price: '$1250.00 MXN',
      img: 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15774868_1870118506557554_6797741690748169470_o.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=7v5jLeBUhd8AX-36KGo&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=f1bad5e2cf794129b01028a5b5528c35&oe=5ED836C8'
    },
    {
      title: 'Ramo rosmelia',
      price: '$1150.00 MXN',
      img: 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15774993_1870118606557544_4280617496849621820_o.jpg?_nc_cat=105&_nc_sid=e007fa&_nc_ohc=IUlfcfvOmqgAX9r2QkD&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=0920f0f283930af3c1c4ee9dbd7564ae&oe=5EDA2C34'
    },
    {
      title: 'Rosadas',
      price: '$690.00 MXN',
      img: 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15676556_1870118853224186_3105862943381986603_o.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=wFvlLQoY0VwAX80JI_J&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=fdd3a1d02f78bc4f9a85accdc5d7b392&oe=5EDAC242'
    },
    {
      title: 'Rosadas',
      price: '$690.00 MXN',
      img: 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15676556_1870118853224186_3105862943381986603_o.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=wFvlLQoY0VwAX80JI_J&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=fdd3a1d02f78bc4f9a85accdc5d7b392&oe=5EDAC242'
    }
  ];

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  showDetails() {
    this.router.navigate(['flores/detalles']);
  }

}

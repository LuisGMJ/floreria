import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flip-book',
  templateUrl: './flip-book.component.html',
  styleUrls: ['./flip-book.component.css']
})
export class FlipBookComponent implements OnInit {

  

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  showDetails() {
    this.router.navigate(['flores/detalles']);
  }

}

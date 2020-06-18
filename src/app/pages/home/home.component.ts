import { Component, OnInit } from '@angular/core';
import { GeneralDataService } from '../../services/general-data.service';
import { CarouselDataService } from '../../services/carousel-data.service';
import { ProductsDataService } from '../../services/products-data.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titleflipbook = 'Arreglos destacados';

  carouselData = {};
  productsData: any;

  // Pagination
  // tableData contendrá los elementos del documento que se obtienen de la colección
  tableData: any[] = [];

  // guarda el primer documento en una instantánea de los artículos recibidos
  firstInResponse: any = [];

  // guardar el último documento en una instantánea de los artículos recibidos
  lastInResponse: any = [];

  // mantener la matriz del primer documento de páginas anteriores
  prev_strt_at: any = [];

  // mantener el recuento de clics en el botón Siguiente Anterior
  pagination_clicked_count = 0;

  // se necesitarán dos botones para cargar los datos siguientes o los datos anteriores
  // deshabilita los botones siguiente y anterior
  disable_next: boolean = false;
  disable_prev: boolean = true;


  constructor(private carouselService: CarouselDataService, private productsService: ProductsDataService,
    public angularFirestore: AngularFirestore) {
    // inicialmente carga los primeros 5 registros / elementos de la base de datos
    this.getItems();
  }

  ngOnInit(): void {
    this.carouselService.getCarouselData().subscribe(data => this.carouselData = data);
    this.productsService.getProductsData(3).subscribe(data => this.productsData = data);
  }

  getItems() {
    this.angularFirestore.collection('arrangement', ref => ref
      .limit(5)
      .orderBy('views', 'desc')
    ).snapshotChanges().subscribe(response => {
      if (!response.length) {
        console.log('No Data Available');
        return false;
      }
      this.firstInResponse = response[0];
      this.lastInResponse = response[response.length - 1];


      this.tableData = [];
      for (let item of response) {
        this.tableData.push(item.payload.doc.data());
      }

      // initialize values
      this.prev_strt_at = [];
      this.pagination_clicked_count = 0;
      this.disable_next = false;
      this.disable_prev = false;

      // push first item to use for Previous action
      this.push_prev_startAt(this.firstInResponse);
    }, error => {
      console.log(error);
    });
  }

  // add a document
  push_prev_startAt(prev_first_doc) {
    this.prev_strt_at.push(prev_first_doc);
  }

  // remove non required document 
  pop_prev_startAt(prev_first_doc) {
    this.prev_strt_at.forEach(element => {
      if (prev_first_doc.payload.doc.data().id == element.payload.doc.data().id) {
        element = null;
      }
    });
  }

  // return the Doc rem where previous page will startAt
  get_prev_startAt() {
    if (this.prev_strt_at.length > (this.pagination_clicked_count + 1)) {
      this.prev_strt_at.splice(this.prev_strt_at.length - 2, this.prev_strt_at.length - 1);
    }
    return this.prev_strt_at[this.pagination_clicked_count - 1];
  }

  nextPage() {
    this.disable_next = true;
    this.angularFirestore.collection('arrangement', ref => ref
      .limit(5)
      .orderBy('views', 'desc')
      .startAfter(this.lastInResponse.payload.doc)
    ).snapshotChanges()
      .subscribe(response => {
        if (!response.length) {
          console.log('No More Data Available');
          this.disable_next = true;
          return;
        }
        this.firstInResponse = response[0];
        this.lastInResponse = response[response.length - 1];
        this.tableData = [];
        for (let item of response) {
          this.tableData.push(item.payload.doc.data());
        }
        this.pagination_clicked_count++;
        this.push_prev_startAt(this.firstInResponse);
        if (response.length < 5) {
          // disable next button if data fetched is less than 5 - means no more data left to load
          // because limit ti get data is set to 5
          this.disable_next = true;
        } else {
          this.disable_next = false;
        }
        this.disable_prev = false;
      }, error => {
        this.disable_next = false;
      });
  }

  prevPage() {
    this.disable_prev = true;
    this.angularFirestore.collection('arrangement', ref => ref
      .orderBy('views', 'desc')
      .startAt(this.get_prev_startAt().payload.doc)
      .endBefore(this.firstInResponse.payload.doc)
      .limit(5)
    ).snapshotChanges()
      .subscribe(response => {
        this.firstInResponse = response[0];
        this.lastInResponse = response[response.length - 1];

        this.tableData = [];
        for (let item of response) {
          this.tableData.push(item.payload.doc.data());
        }

        // maintaing page no.
        this.pagination_clicked_count--;
        console.log('llego aqui');
        // pop not required value in array
        this.pop_prev_startAt(this.firstInResponse);

        // enable buttons again
        if (this.pagination_clicked_count == 0) {
          this.disable_prev = true;
        } else {
          this.disable_prev = false;
        }
        this.disable_next = false;
      }, error => {
        this.disable_prev = false;
      });
  }

}

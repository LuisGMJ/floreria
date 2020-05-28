import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  linkImage = 'https://media.interflora.es/catalog/product/cache/1/image/726x/9df78eab33525d08d6e5fb8d27136e95/p/0/p0100.jpg';
 
  openModalWithComponent() {
    const initialState = {
      img: this.linkImage,
      title: 'Arreglo floral'
    };
    this.bsModalRef = this.modalService.show(ModalComponent, {initialState,
      class: 'gray modal-lg'});
    this.bsModalRef.content.closeBtnName = 'Cerrar';
  }

  ngOnInit(): void {
  }

}

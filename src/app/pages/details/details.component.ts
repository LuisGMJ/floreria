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

  linkImage = 'https://scontent.fcyw4-1.fna.fbcdn.net/v/t31.0-8/p720x720/15800516_1873474552888616_4606950529000619231_o.jpg?_nc_cat=106&_nc_sid=dd9801&_nc_ohc=qndyhRLFwfkAX_YquJv&_nc_ht=scontent.fcyw4-1.fna&_nc_tp=6&oh=71a123180a075c9a9a6d2c0eb5fe1d43&oe=5EDAAE1C';
 
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

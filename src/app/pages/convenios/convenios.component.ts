import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '.content_inner_wrapper',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.scss']
})
export class ConveniosComponent implements OnInit {

  private convenios: any;
  closeResult: string;
  private nome: any;
  private types: any;
  userFilter: any = { name: '' };

  constructor(
    public http: HttpClient,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.http.get('/api/plan').subscribe(data => {
      // console.log(data);
      this.convenios = data;
    });
  }

  open(content, types, nome) {
    this.nome = nome;
    this.types = types;
    // console.log(types);
    // this.modalService.open(content, { size: 'lg' });
    this.modalService.open(content, { size: 'lg', windowClass: 'custom-modal' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

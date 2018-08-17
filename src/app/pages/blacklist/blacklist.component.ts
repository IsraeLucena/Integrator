import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '.content_inner_wrapper',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.scss']
})
export class BlacklistComponent implements OnInit {

  private unidades: any;
  private convenios: any;
  closeResult: string;
  private nome: any;

  constructor(
    public http: HttpClient,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.loadUnidades();
  }

  loadUnidades() {
    this.http.get('/api/unit').subscribe(data => {
      // console.log(data);
      this.unidades = data;
      // console.log(this.unidades[0].blackList[0]);
    });
  }

  open(content, nome, convenios, activated, id) {
    this.nome = nome;
    this.convenios = convenios;
    // console.log(convenios);
    // this.activated = activated;
    // this.id = id;
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

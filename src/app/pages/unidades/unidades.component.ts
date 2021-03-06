import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: '.content_inner_wrapper',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss']
})
export class UnidadesComponent implements OnInit {

  title = 'Unidades';
  private nome: any;
  private cnes: any;
  private id: any;
  private types: any;
  closeResult: string;
  private unidades: any;
  private modalReference: any;
  userFilter: any = { name: '' };

  constructor(
    public http: HttpClient,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loadList();
  }

  novaUnidade(event) {
    event.preventDefault();
    const target = event.target;
    const nome = target.querySelector('#inputNome').value;
    const cnes = target.querySelector('#inputCnes').value;
    if (this.id == null) {
      this.http.post('/api/unit',
        {
          clientId: 1,
          cnes: cnes,
          name: nome
        })
        .subscribe(
          (val) => {
            // console.log('POST call successful value returned in body',
            //   val);
            this.loadList();
            this.modalReference.close();
            this.showAdd();
            // alert('Conta criada com sucesso!');
            // location.reload();
            // this.router.navigate(['/unidades']);
          });
    } else {
      // console.log(this.id, cnes, nome);
      this.http.put('/api/unit',
        {
          clientId: 1,
          id: this.id,
          cnes: cnes,
          name: nome
        })
        .subscribe(
          (val) => {
            // console.log('PUT call successful value returned in body',
            //   val);
            this.loadList();
            this.modalReference.close();
            this.showEdit();
            // alert('Conta criada com sucesso!');
            // location.reload();
            // this.router.navigate(['/unidades']);
          });
    }
  }

  remove(unidadeID: any) {
    if (unidadeID != null) {
      this.http.delete(`/api/unit/${unidadeID}`)
        .subscribe(
          (val) => {
            // console.log('POST call successful value returned in body',
            //   val);
            this.loadList();
            this.showDelete();
            // alert('Conta criada com sucesso!');
            // location.reload();
            // this.router.navigate(['/unidades']);
          });
    }
  }

  loadList() {
    this.http.get('/api/unit').subscribe(data => {
      // console.log(data);
      this.unidades = data;
    });
  }

  open(content, types, nome, cnes, id) {
    this.nome = nome;
    this.cnes = cnes;
    this.id = id;
    this.types = types;
    // console.log(types);
    // this.modalService.open(content, { size: 'lg' });
    this.modalReference = this.modalService.open(content, { size: 'lg', windowClass: 'custom-modal' });
    this.modalReference.result.then((result) => {
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

  showAdd() {
    this.toastr.success('', 'Unidade Adicionada.');
  }

  showEdit() {
    this.toastr.success('', 'Unidade Alterada.');
  }

  showDelete() {
    this.toastr.error('', 'Unidade Removida.');
  }
}

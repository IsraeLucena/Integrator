import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '.content_inner_wrapper',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {

  private text: any;
  title = 'Integração Manual';
  private nome: any;
  private types: any;
  closeResult: string;
  private client: any;

  options: any = {
    maxLines: 100000,
    printMargin: false,
    autoScrollEditorIntoView: true,
    copyWithEmptySelection: true,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
  };

  onChange(code) {
    // console.log(code);
  }

  constructor(
    public http: HttpClient,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.loadList();
  }

  novaUnidade(event) {
    event.preventDefault();
    const target = event.target;
    const nome = target.querySelector('#inputNome').value;
    const cnes = target.querySelector('#inputCnes').value;
    // console.log(nome, cnes);
    this.http.post('/api/unit',
      {
        clientId: 1,
        cnes: cnes,
        unitName: nome
      })
      .subscribe(
        (val) => {
          // console.log('POST call successful value returned in body',
          //   val);
          this.loadList();
          //alert('Conta criada com sucesso!');
          //location.reload();
          // this.router.navigate(['/unidades']);
        },
        response => {
          // console.log('POST call in error', response);
        },
        () => {
          // console.log('The POST observable is now completed.');
        });
  }

  loadList() {
    this.http.get('/api/client').subscribe(data => {
      // console.log(data);
      this.client = data;
      this.text = JSON.stringify(data, null, '\t');
    });
  }

  atualizarDados() {
    this.http.post('/api/integration/migration', {}).subscribe(data => {
      // console.log(data);
      this.client = data;
    });
  }

  enviarDados() {
    this.http.post('/api/integration/send', {}).subscribe(data => {
      // console.log(data);
      this.client = data;
    });
  }

  jsonConvert(sent: any) {
    // console.log(sent);
    if (/^[\],:{}\s]*$/.test(sent.toString().replace(/\\["\\\/bfnrtu]/g, '@').
      replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
      replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
      return JSON.parse(sent);
    } else {
      return '{}';
    }
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

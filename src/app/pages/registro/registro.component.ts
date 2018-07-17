import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Jsonp } from '@angular/http';

@Component({
  selector: '.content_inner_wrapper',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  private logs: any;
  closeResult: string;
  private nome: any;
  private types: any;

  constructor(
    public http: HttpClient,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.http.get('/api/log').subscribe(data => {
      const log = Object.keys(data).map(i => data[i]);
      const len = log.length;

      //console.log(log.slice((len - 100), len));
      this.logs = (log.slice((len - 100), len).reverse());
    });
  }

  jsonConvert(sent: any) {
    if (/^[\],:{}\s]*$/.test(sent.replace(/\\["\\\/bfnrtu]/g, '@').
      replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
      replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
      return JSON.parse(sent);
    } else {
      return '{}';
    }
  }

}

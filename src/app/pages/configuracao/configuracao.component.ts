import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: '.content_inner_wrapper',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.scss']
})
export class ConfiguracaoComponent implements OnInit {

  private config: any = {};

  constructor(
    public http: HttpClient,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get('/api/user').subscribe(data => {
      this.config = data[0];
      console.log(this.config);
    });
  }

  onSubmit(modelConf: any) {
    console.log(this.config);
    console.log(modelConf);
    this.http.put('/api/user', this.config)
      .subscribe(
        (val) => {
          console.log('PUT call successful value returned in body',
            val);
          // TOAST
        });
  }

}

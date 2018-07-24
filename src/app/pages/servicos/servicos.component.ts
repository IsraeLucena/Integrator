import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: '.content_inner_wrapper',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServicosComponent implements OnInit {

  private unidades: any;
  private servicos: any;
  private nome: any;
  private key: any;
  private order: any;
  private id: any;
  private activated: any;
  closeResult: string;
  private modalReference: any;


  private uServiceName: any;
  private uServiceKey: any;
  private uServiceAverage: any;
  private uServiceUnitID: any;
  private uServiceID: any;
  private uServiceActivated: any;


  constructor(
    public http: HttpClient,
    private modalService: NgbModal) { }

  novoServico(event) {
    event.preventDefault();
    const target = event.target;
    const nome = target.querySelector('#inputNome').value;
    const key = target.querySelector('#inputKey').value;
    const order = target.querySelector('#inputOrder').value;
    //const activate = target.querySelector('#activated').value;
    if (this.id == null) {
      this.http.post('/api/urgency',
        {
          clientId: 1,
          key: key,
          name: nome,
          fixedOrder: order,
          activated: true
        })
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body',
              val);
            this.loadServicos();
            this.modalReference.close();
            //alert('Conta criada com sucesso!');
            //location.reload();
            // this.router.navigate(['/unidades']);
          });
    } else {
      // console.log(this.id, key, nome, order);

      console.log(this.id + ' clientId: 1' +
        ' key: ' + key +
        ' name: ' + nome +
        ' fixedOrder: ' + order +
        ' activated: true');
      this.http.put(`/api/urgency/${this.id}`,
        {
          clientId: 1,
          key: key,
          name: nome,
          fixedOrder: order,
          activated: true
        })
        .subscribe(
          (val) => {
            console.log('PUT call successful value returned in body',
              val);
            this.loadServicos();
            this.modalReference.close();
            //alert('Conta criada com sucesso!');
            //location.reload();
            // this.router.navigate(['/unidades']);
          });
    }
  }

  remove(servicoID: any) {
    if (servicoID != null) {
      this.http.delete(`/api/urgency/${servicoID}`)
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body',
              val);
            this.loadServicos();
            //alert('Conta criada com sucesso!');
            //location.reload();
            // this.router.navigate(['/unidades']);
          });
    }
  }

  novoServicoUnidade(event) {
    event.preventDefault();
    const target = event.target;
    const nome = target.querySelector('#inputSUNome').value;
    const key = target.querySelector('#inputSUKey').value;
    const average = target.querySelector('#inputSUAverage').value;
    //const activate = target.querySelector('#activated').value;
    console.log("serviceIDId: " + this.uServiceID +
      "key: " + key +
      "name: " + nome +
      "averageTime: " + average +
      "activated: " + true);
    if (this.uServiceID == null) {
      this.http.post('/api/unit_urgency',
        {
          unitId: this.uServiceUnitID,
          key: key,
          name: nome,
          averageTime: average,
          activated: true
        })
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body',
              val);
            this.loadUnidades();
            this.modalReference.close();
            //alert('Conta criada com sucesso!');
            //location.reload();
            // this.router.navigate(['/unidades']);
          });
    } else {
      console.log(this.id, key, nome);
      this.http.put(`/api/unit_urgency/${this.uServiceID}`,
        {
          unitId: this.uServiceUnitID,
          averageTime: average,
          key: key,
          name: nome,
          activated: true
        })
        .subscribe(
          (val) => {
            console.log('PUT call successful value returned in body',
              val);
            this.loadUnidades();
            this.modalReference.close();
            //alert('Conta criada com sucesso!');
            //location.reload();
            // this.router.navigate(['/unidades']);
          });
    }
  }

  removeSU(servicoID: any) {
    if (this.uServiceID != null) {
      this.http.delete(`/api/urgency/${servicoID}`)
        .subscribe(
          (val) => {
            console.log('POST call successful value returned in body',
              val);
            this.loadUnidades();
            //alert('Conta criada com sucesso!');
            //location.reload();
            // this.router.navigate(['/unidades']);
          });
    }
  }

  ngOnInit() {
    this.loadServicos();
    this.loadUnidades();

  }

  loadServicos() {
    this.http.get('/api/urgency').subscribe(data => {
      // console.log(data);
      const serArray = Object.keys(data).map(i => data[i]);
      serArray.sort(function (a, b) {
        // console.log(a.fixedOrder);
        return a.fixedOrder - b.fixedOrder;
      });
      this.servicos = serArray;
    });
  }

  loadUnidades() {
    this.http.get('/api/unit').subscribe(data => {
      console.log(data);
      this.unidades = data;
    });
  }

  openSU(content, nome, key, average, activated, id, unitID) {
    console.log(unitID);
    this.uServiceName = nome;
    this.uServiceKey = key;
    this.uServiceAverage = average;
    this.uServiceActivated = activated;
    this.uServiceUnitID = unitID;
    this.uServiceID = id;
    this.modalReference = this.modalService.open(content, { size: 'lg', windowClass: 'custom-modal' });
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open(content, nome, key, order, activated, id) {
    this.nome = nome;
    this.key = key;
    this.order = order;
    this.activated = activated;
    this.id = id;
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
}
